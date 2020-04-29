'use strict';

//
// Compatibility with older node.js as path.exists got moved to `fs`.
//
var fs = require('fs');
var path = require('path');
// var os = require('os');
// var hook = path.join(__dirname, 'hook');
var root = path.resolve(__dirname, '.', '.');
var exists = fs.existsSync || path.existsSync;
var hookList = [
  'applypatch-msg',
  'pre-applypatch',
  'post-applypatch',
  'pre-commit',
  'prepare-commit-msg',
  'commit-msg',
  'post-commit',
  'pre-rebase',
  'post-checkout',
  'post-merge',
  'pre-push',
  'pre-receive',
  'update',
  'post-receive',
  'post-update',
  'push-to-checkout',
  'pre-auto-gc',
  'post-rewrite',
  'sendemail-validate'
];
var hooks;
var genChangeIdFile = path.resolve(root, 'genCommitChangeId.sh');

// Find ggenChangeIdFile file and set permissions
if (exists(genChangeIdFile)) {
  fs.chmodSync(genChangeIdFile, parseInt('0755', 8));
} else {
  console.log("");
}

//
// Gather the location of the possible hidden .git directory, the hooks
// directory which contains all git hooks and the absolute location of the
// hooks files. The path needs to be absolute in order for the symlinking
// to work correctly.
//

var git = getGitFolderPath(root);

// Function to recursively finding .git folder
function getGitFolderPath(currentPath) {
  var git = path.resolve(currentPath, '.git');

  if (!exists(git) || !fs.lstatSync(git).isDirectory()) {
    console.log('uninstall hooks: Not found .git folder in', git);

    var newPath = path.resolve(currentPath, '..');

    // Stop if we on top folder
    if (currentPath === newPath) {
      return null;
    }

    return getGitFolderPath(newPath);
  }

  console.log('uninstall hooks: Found .git folder in', git);
  return git;
}

//
// Resolve git directory for submodules
//
if (exists(git) && fs.lstatSync(git).isFile()) {
  var gitinfo = fs.readFileSync(git).toString();
  var gitdirmatch = /gitdir: (.+)/.exec(gitinfo);
  var gitdir = gitdirmatch.length === 2 ? gitdirmatch[1] : null;

  if (gitdir !== null) {
    git = path.resolve(root, gitdir);
    hooks = path.resolve(git, 'hooks');
  }
}

//
// Bail out if we don't have an `.git` directory as the hooks will not get
// triggered. If we do have directory create a hooks folder if it doesn't exist.
//
if (git) {
  hooks = path.resolve(git, 'hooks');
  //  , precommit = path.resolve(hooks, 'pre-commit');

  if (!exists(hooks)) {
    fs.mkdirSync(hooks);
  }

  for (var i = 0; i < hookList.length; i++) {
    var hookFile = path.resolve(hooks, hookList[i]);
    //
    // If there's an existing `pre-commit` hook we want to back it up instead of
    // overriding it and losing it completely as it might contain something
    // important.
    //
    if (exists(hookFile) && !fs.lstatSync(hookFile).isSymbolicLink()) {
      console.log('uninstall hooks: Detected an existing git %s hook', hookList[i]);
      fs.writeFileSync(hookFile + '.old', fs.readFileSync(hookFile));
      console.log('uninstall hooks: Old %s hook backuped to %s.old', hookList[i], hookList[i]);
    }

    //
    // We cannot create a symlink over an existing file so make sure it's gone and
    // finish the installation process.
    //
    try {
      fs.unlinkSync(hookFile);
    } catch (e) {}
  }
} else {
  console.log('uninstall hooks: Not found any .git folder for installing hooks');
}
