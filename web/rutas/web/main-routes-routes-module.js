(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-routes-routes-module"],{

/***/ "./node_modules/html-to-image/lib/applyStyleWithOptions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html-to-image/lib/applyStyleWithOptions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyStyleWithOptions(clonedNode, options) {
    var style = clonedNode.style;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = options.width + "px";
    }
    if (options.height) {
        style.height = options.height + "px";
    }
    if (options.style) {
        Object.assign(style, options.style);
    }
    return clonedNode;
}
exports.default = applyStyleWithOptions;


/***/ }),

/***/ "./node_modules/html-to-image/lib/cloneNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-to-image/lib/cloneNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var clonePseudoElements_1 = __importDefault(__webpack_require__(/*! ./clonePseudoElements */ "./node_modules/html-to-image/lib/clonePseudoElements.js"));
function cloneSingleNode(nativeNode) {
    if (nativeNode instanceof HTMLCanvasElement) {
        return utils_1.createImage(nativeNode.toDataURL());
    }
    if (nativeNode.tagName && nativeNode.tagName.toLowerCase() === 'svg') {
        return Promise.resolve(nativeNode)
            .then(function (svg) { return utils_1.svgToDataURL(svg); })
            .then(utils_1.createImage);
    }
    return Promise.resolve(nativeNode.cloneNode(false));
}
function cloneChildren(nativeNode, clonedNode, filter) {
    var children = utils_1.toArray(nativeNode.childNodes);
    if (children.length === 0) {
        return Promise.resolve(clonedNode);
    }
    // clone children in order
    return children.reduce(function (done, child) { return done
        .then(function () { return cloneNode(child, filter); })
        .then(function (clonedChild) {
        if (clonedChild) {
            clonedNode.appendChild(clonedChild);
        }
    }); }, Promise.resolve())
        .then(function () { return clonedNode; });
}
function cloneCssStyle(nativeNode, clonedNode) {
    var source = window.getComputedStyle(nativeNode);
    var target = clonedNode.style;
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        utils_1.toArray(source).forEach(function (name) {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function decorate(nativeNode, clonedNode) {
    if (!(clonedNode instanceof Element)) {
        return clonedNode;
    }
    return Promise.resolve()
        .then(function () { return cloneCssStyle(nativeNode, clonedNode); })
        .then(function () { return clonePseudoElements_1.default(nativeNode, clonedNode); })
        .then(function () { return cloneInputValue(nativeNode, clonedNode); })
        .then(function () { return clonedNode; });
}
function cloneNode(domNode, filter, isRoot) {
    if (!isRoot && filter && !filter(domNode)) {
        return Promise.resolve(null);
    }
    return Promise.resolve(domNode)
        .then(cloneSingleNode)
        .then(function (clonedNode) { return cloneChildren(domNode, clonedNode, filter); })
        .then(function (clonedNode) { return decorate(domNode, clonedNode); });
}
exports.default = cloneNode;


/***/ }),

/***/ "./node_modules/html-to-image/lib/clonePseudoElements.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-to-image/lib/clonePseudoElements.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function formatCssText(style) {
    var content = style.getPropertyValue('content');
    return style.cssText + " content: " + content + ";";
}
function formatCssProperties(style) {
    return utils_1.toArray(style).map(function (name) {
        var value = style.getPropertyValue(name);
        var priority = style.getPropertyPriority(name);
        return name + ": " + value + (priority ? ' !important' : '') + ";";
    }).join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    var selector = "." + className + ":" + pseudo;
    var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
    return document.createTextNode(selector + "{" + cssText + "}");
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    var style = window.getComputedStyle(nativeNode, pseudo);
    var content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    var className = utils_1.uuid();
    var styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.className = clonedNode.className + " " + className;
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    [
        ':before',
        ':after',
    ].forEach(function (pseudo) { return clonePseudoElement(nativeNode, clonedNode, pseudo); });
}
exports.default = clonePseudoElements;


/***/ }),

/***/ "./node_modules/html-to-image/lib/createSvgDataURL.js":
/*!************************************************************!*\
  !*** ./node_modules/html-to-image/lib/createSvgDataURL.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function createSvgDataURL(clonedNode, width, height) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS('', 'width', "" + width);
    svg.setAttributeNS('', 'height', "" + height);
    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clonedNode);
    return utils_1.svgToDataURL(svg);
}
exports.default = createSvgDataURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedImages.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedImages.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var embedResources_1 = __importDefault(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function embedBackground(clonedNode, options) {
    var background = clonedNode.style.getPropertyValue('background');
    if (!background) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(background)
        .then(function (cssString) { return embedResources_1.default(cssString, null, options); })
        .then(function (cssString) {
        clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
        return clonedNode;
    });
}
function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement) || utils_1.isDataUrl(clonedNode.src)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode.src)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(clonedNode.src)); })
        .then(function (dataURL) { return new Promise((function (resolve, reject) {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        clonedNode.src = dataURL;
    })); })
        .then(function () { return clonedNode; }, function () { return clonedNode; });
}
function embedChildren(clonedNode, options) {
    var children = utils_1.toArray(clonedNode.childNodes);
    var deferreds = children.map(function (child) { return embedImages(child, options); });
    return Promise.all(deferreds).then(function () { return clonedNode; });
}
function embedImages(clonedNode, options) {
    if (!(clonedNode instanceof Element)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode)
        .then(function (node) { return embedBackground(node, options); })
        .then(function (node) { return embedImageNode(node, options); })
        .then(function (node) { return embedChildren(node, options); });
}
exports.default = embedImages;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedResources.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedResources.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getBlobFromURL_1 = __importDefault(__webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/lib/getBlobFromURL.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    var doc = document.implementation.createHTMLDocument();
    var base = doc.createElement('base');
    var a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function escape(url) {
    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
function urlToRegex(url) {
    return new RegExp("(url\\(['\"]?)(" + escape(url) + ")(['\"]?\\))", 'g');
}
function parseURLs(str) {
    var result = [];
    str.replace(URL_REGEX, function (raw, quotation, url) {
        result.push(url);
        return raw;
    });
    return result.filter(function (url) { return !utils_1.isDataUrl(url); });
}
function embed(cssString, resourceURL, baseURL, options) {
    var resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then(function (url) { return getBlobFromURL_1.default(url, options); })
        .then(function (data) { return utils_1.toDataURL(data, utils_1.getMimeType(resourceURL)); })
        .then(function (dataURL) { return cssString.replace(urlToRegex(resourceURL), "$1" + dataURL + "$3"); })
        .then(function (content) { return content; }, function () { return resolvedURL; });
}
function shouldEmbed(string) {
    return string.search(URL_REGEX) !== -1;
}
exports.shouldEmbed = shouldEmbed;
function embedResources(cssString, baseUrl, options) {
    if (!shouldEmbed(cssString)) {
        return Promise.resolve(cssString);
    }
    return Promise.resolve(cssString)
        .then(parseURLs)
        .then(function (urls) { return urls.reduce(function (done, url) { return done.then(function (ret) { return embed(ret, url, baseUrl, options); }); }, Promise.resolve(cssString)); });
}
exports.default = embedResources;


/***/ }),

/***/ "./node_modules/html-to-image/lib/embedWebFonts.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/lib/embedWebFonts.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
var embedResources_1 = __importStar(__webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/lib/embedResources.js"));
function parseCSS(source) {
    if (source === undefined) {
        return [];
    }
    var cssText = source;
    var css = [];
    var cssKeyframeRegex = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})';
    var combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]'
        + '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})'; // to match css & media queries together
    var cssCommentsRegex = new RegExp('(\\/\\*[\\s\\S]*?\\*\\/)', 'gi');
    // strip out comments
    cssText = cssText.replace(cssCommentsRegex, '');
    var keyframesRegex = new RegExp(cssKeyframeRegex, 'gi');
    var arr;
    while (true) {
        arr = keyframesRegex.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    // unified regex
    var unified = new RegExp(combinedCSSRegex, 'gi');
    while (true) {
        arr = unified.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    return css;
}
function fetchCSS(url, sheet) {
    return fetch(url).then(function (res) {
        return {
            url: url,
            cssText: res.text(),
        };
    }, function (e) {
        console.log('ERROR FETCHING CSS: ', e.toString());
    });
}
function embedFonts(data) {
    return data.cssText.then(function (resolved) {
        var cssText = resolved;
        var fontLocations = cssText.match(/url\([^)]+\)/g) || [];
        var fontLoadedPromises = fontLocations.map(function (location) {
            var url = location.replace(/url\(([^]+)\)/g, '$1');
            if (!url.startsWith('https://')) {
                var source = data.url;
                url = new URL(url, source).href;
            }
            return new Promise(function (resolve, reject) {
                fetch(url)
                    .then(function (res) { return res.blob(); })
                    .then(function (blob) {
                    var reader = new FileReader();
                    reader.addEventListener('load', function (res) {
                        // Side Effect
                        cssText = cssText.replace(location, "url(" + reader.result + ")");
                        resolve([location, reader.result]);
                    });
                    reader.readAsDataURL(blob);
                })
                    .catch(reject);
            });
        });
        return Promise.all(fontLoadedPromises).then(function () { return cssText; });
    });
}
function getCssRules(styleSheets) {
    var ret = [];
    var promises = [];
    // First loop inlines imports
    styleSheets.forEach(function (sheet) {
        if ('cssRules' in sheet) {
            try {
                utils_1.toArray(sheet.cssRules).forEach(function (item) {
                    if (item.type === CSSRule.IMPORT_RULE) {
                        promises.push(fetchCSS(item.href, sheet)
                            .then(embedFonts)
                            .then(function (cssText) {
                            var parsed = parseCSS(cssText);
                            parsed.forEach(function (rule) {
                                sheet.insertRule(rule, sheet.cssRules.length);
                            });
                        })
                            .catch(function (e) {
                            console.log('Error loading remote css', e.toString());
                        }));
                    }
                });
            }
            catch (e) {
                var inline_1 = styleSheets.find(function (a) { return a.href === null; }) || document.styleSheets[0];
                if (sheet.href != null) {
                    promises.push(fetchCSS(sheet.href, inline_1)
                        .then(embedFonts)
                        .then(function (cssText) {
                        var parsed = parseCSS(cssText);
                        parsed.forEach(function (rule) {
                            inline_1.insertRule(rule, sheet.cssRules.length);
                        });
                    })
                        .catch(function (e) {
                        console.log('Error loading remote stylesheet', e.toString());
                    }));
                }
                console.log('Error inlining remote css file', e.toString());
            }
        }
    });
    return Promise
        .all(promises)
        .then(function () {
        // Second loop parses rules
        styleSheets.forEach(function (sheet) {
            if ('cssRules' in sheet) {
                try {
                    utils_1.toArray(sheet.cssRules).forEach(function (item) {
                        ret.push(item);
                    });
                }
                catch (e) {
                    console.log("Error while reading CSS rules from " + sheet.href, e.toString());
                }
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter(function (rule) { return rule.type === CSSRule.FONT_FACE_RULE; })
        .filter(function (rule) { return embedResources_1.shouldEmbed(rule.style.getPropertyValue('src')); });
}
function parseWebFontRules(clonedNode) {
    return new Promise(function (resolve, reject) {
        if (!clonedNode.ownerDocument) {
            reject(new Error('Provided element is not within a Document'));
        }
        resolve(utils_1.toArray(clonedNode.ownerDocument.styleSheets));
    })
        .then(getCssRules)
        .then(getWebFontRules);
}
exports.parseWebFontRules = parseWebFontRules;
function embedWebFonts(clonedNode, options) {
    return parseWebFontRules(clonedNode)
        .then(function (rules) { return Promise.all(rules.map(function (rule) {
        var baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return embedResources_1.default(rule.cssText, baseUrl, options);
    })); })
        .then(function (cssStrings) { return cssStrings.join('\n'); })
        .then(function (cssString) {
        var styleNode = document.createElement('style');
        var sytleContent = document.createTextNode(cssString);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        }
        else {
            clonedNode.appendChild(styleNode);
        }
        return clonedNode;
    });
}
exports.default = embedWebFonts;


/***/ }),

/***/ "./node_modules/html-to-image/lib/getBlobFromURL.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-to-image/lib/getBlobFromURL.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:max-line-length */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
// KNOWN ISSUE
// -----------
// Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
// will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'
var TIMEOUT = 30000;
function getBlobFromURL(url, options) {
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        url += ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime(); // tslint:disable-line
    }
    var failed = function (reason) {
        var placeholder = '';
        if (options.imagePlaceholder) {
            var split = options.imagePlaceholder.split(/,/);
            if (split && split[1]) {
                placeholder = split[1];
            }
        }
        var msg = "Failed to fetch resource: " + url;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return placeholder;
    };
    var deferred = window.fetch
        // fetch
        ? window.fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); })
            .then(utils_1.getDataURLContent)
            .catch(function () { return new Promise(function (resolve, reject) {
            reject();
        }); })
        // xhr
        : new Promise((function (resolve, reject) {
            var req = new XMLHttpRequest();
            var timeout = function () {
                reject(new Error("Timeout of " + TIMEOUT + "ms occured while fetching resource: " + url));
            };
            var done = function () {
                if (req.readyState !== 4) {
                    return;
                }
                if (req.status !== 200) {
                    reject(new Error("Failed to fetch resource: " + url + ", status: " + req.status));
                    return;
                }
                var encoder = new FileReader();
                encoder.onloadend = function () {
                    resolve(utils_1.getDataURLContent(encoder.result));
                };
                encoder.readAsDataURL(req.response);
            };
            req.onreadystatechange = done;
            req.ontimeout = timeout;
            req.responseType = 'blob';
            req.timeout = TIMEOUT;
            req.open('GET', url, true);
            req.send();
        }));
    return deferred.catch(failed);
}
exports.default = getBlobFromURL;


/***/ }),

/***/ "./node_modules/html-to-image/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloneNode_1 = __importDefault(__webpack_require__(/*! ./cloneNode */ "./node_modules/html-to-image/lib/cloneNode.js"));
var embedWebFonts_1 = __importDefault(__webpack_require__(/*! ./embedWebFonts */ "./node_modules/html-to-image/lib/embedWebFonts.js"));
var embedImages_1 = __importDefault(__webpack_require__(/*! ./embedImages */ "./node_modules/html-to-image/lib/embedImages.js"));
var createSvgDataURL_1 = __importDefault(__webpack_require__(/*! ./createSvgDataURL */ "./node_modules/html-to-image/lib/createSvgDataURL.js"));
var applyStyleWithOptions_1 = __importDefault(__webpack_require__(/*! ./applyStyleWithOptions */ "./node_modules/html-to-image/lib/applyStyleWithOptions.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/html-to-image/lib/utils.js");
function getImageSize(domNode, options) {
    if (options === void 0) { options = {}; }
    var width = options.width || utils_1.getNodeWidth(domNode);
    var height = options.height || utils_1.getNodeHeight(domNode);
    return { width: width, height: height };
}
function toSvgDataURL(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return cloneNode_1.default(domNode, options.filter, true)
        .then(function (clonedNode) { return embedWebFonts_1.default(clonedNode, options); })
        .then(function (clonedNode) { return embedImages_1.default(clonedNode, options); })
        .then(function (clonedNode) { return applyStyleWithOptions_1.default(clonedNode, options); })
        .then(function (clonedNode) { return createSvgDataURL_1.default(clonedNode, width, height); });
}
exports.toSvgDataURL = toSvgDataURL;
function toCanvas(domNode, options) {
    if (options === void 0) { options = {}; }
    return toSvgDataURL(domNode, options)
        .then(utils_1.createImage)
        .then(utils_1.delay(100))
        .then(function (image) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = utils_1.getPixelRatio();
        var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        if (options.backgroundColor) {
            context.fillStyle = options.backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        context.drawImage(image, 0, 0);
        return canvas;
    });
}
exports.toCanvas = toCanvas;
function toPixelData(domNode, options) {
    if (options === void 0) { options = {}; }
    var _a = getImageSize(domNode, options), width = _a.width, height = _a.height;
    return toCanvas(domNode, options)
        .then(function (canvas) { return (canvas.getContext('2d').getImageData(0, 0, width, height).data); });
}
exports.toPixelData = toPixelData;
function toPng(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL()); });
}
exports.toPng = toPng;
function toJpeg(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(function (canvas) { return (canvas.toDataURL('image/jpeg', options.quality || 1)); });
}
exports.toJpeg = toJpeg;
function toBlob(domNode, options) {
    if (options === void 0) { options = {}; }
    return toCanvas(domNode, options).then(utils_1.canvasToBlob);
}
exports.toBlob = toBlob;
exports.default = {
    toSvgDataURL: toSvgDataURL,
    toCanvas: toCanvas,
    toPixelData: toPixelData,
    toPng: toPng,
    toJpeg: toJpeg,
    toBlob: toBlob,
};


/***/ }),

/***/ "./node_modules/html-to-image/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/html-to-image/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WOFF = 'application/font-woff';
var JPEG = 'image/jpeg';
var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
exports.uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    var counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    var randomFourChars = function () {
        return ("0000" + (Math.random() * (Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    };
    return function () {
        counter += 1;
        return "u" + randomFourChars() + counter;
    };
}());
function parseExtension(url) {
    var match = /\.([^./]*?)$/g.exec(url);
    if (match)
        return match[1];
    return '';
}
exports.parseExtension = parseExtension;
function getMimeType(url) {
    var ext = parseExtension(url).toLowerCase();
    return mimes[ext] || '';
}
exports.getMimeType = getMimeType;
function delay(ms) {
    return function (args) { return new Promise((function (resolve) {
        setTimeout(function () {
            resolve(args);
        }, ms);
    })); };
}
exports.delay = delay;
function createImage(url) {
    return new Promise((function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = reject;
        image.crossOrigin = 'anonymous';
        image.src = url;
    }));
}
exports.createImage = createImage;
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
exports.isDataUrl = isDataUrl;
function toDataURL(content, mimeType) {
    return "data:" + mimeType + ";base64," + content;
}
exports.toDataURL = toDataURL;
function getDataURLContent(dataURL) {
    return dataURL.split(/,/)[1];
}
exports.getDataURLContent = getDataURLContent;
function toBlob(canvas) {
    return new Promise((function (resolve) {
        var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        var len = binaryString.length;
        var binaryArray = new Uint8Array(len);
        for (var i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], {
            type: 'image/png',
        }));
    }));
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((function (resolve) {
            canvas.toBlob(resolve);
        }));
    }
    return toBlob(canvas);
}
exports.canvasToBlob = canvasToBlob;
function toArray(arrayLike) {
    var arr = [];
    for (var i = 0, l = arrayLike.length; i < l; i += 1) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
exports.toArray = toArray;
function px(node, styleProperty) {
    var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(value.replace('px', ''));
}
function getNodeWidth(node) {
    var leftBorder = px(node, 'border-left-width');
    var rightBorder = px(node, 'border-right-width');
    return node.scrollWidth + leftBorder + rightBorder;
}
exports.getNodeWidth = getNodeWidth;
function getNodeHeight(node) {
    var topBorder = px(node, 'border-top-width');
    var bottomBorder = px(node, 'border-bottom-width');
    return node.scrollHeight + topBorder + bottomBorder;
}
exports.getNodeHeight = getNodeHeight;
function getPixelRatio() {
    return (window.devicePixelRatio || 1);
}
exports.getPixelRatio = getPixelRatio;
function svgToDataURL(svg) {
    return Promise.resolve()
        .then(function () { return new XMLSerializer().serializeToString(svg); })
        .then(encodeURIComponent)
        .then(function (html) { return "data:image/svg+xml;charset=utf-8," + html; });
}
exports.svgToDataURL = svgToDataURL;
function getBlobFromImageURL(url) {
    return createImage(url).then(function (image) {
        var width = image.width, height = image.height;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var ratio = getPixelRatio();
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = "" + width;
        canvas.style.height = "" + height;
        context.scale(ratio, ratio);
        context.drawImage(image, 0, 0);
        var dataURL = canvas.toDataURL(getMimeType(url));
        return getDataURLContent(dataURL);
    });
}
exports.getBlobFromImageURL = getBlobFromImageURL;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/cancel-dialog/cancel-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/cancel-dialog/cancel-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'CANCEL_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'CANCEL_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"goViewRoutes();\">{{'CANCEL_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'CANCEL_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start center\" id=\"dialog\">\r\n    <span style=\"font-size: 2em;\" class=\"mb-24 mt-12\"><b>{{'CREATE.ENTER_DATA' | translate}}</b></span>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\" style=\"width: 100%\">\r\n        <form fxLayout=\"column\" fxFlex=\"25\" style=\"width: 100%;\" fxLayoutAlign=\"start center\" [formGroup]=\"form\">\r\n            <mat-form-field style=\"width: 85%;\" class=\"mb-20\">\r\n                <mat-label>{{'CREATE.NAME' | translate}}</mat-label>\r\n                <input matInput formControlName=\"name\" required>\r\n                <mat-error *ngIf=\"form.get('name').hasError('required')\">\r\n                    {{'ERROR.REQUIRED' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"form.get('name').hasError('minlength')\">\r\n                    {{'ERROR.MIN_LENGTH_5' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 85%;\" class=\"mb-20\">\r\n                <mat-label>{{'CREATE.MATERIALITY' | translate}}</mat-label>\r\n                <mat-select formControlName=\"materiality\" style=\"width: 100%\" required>\r\n                    <mat-option *ngFor=\"let mat of materiality\" [value]=\"mat.value\">{{mat.name}}</mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                    {{'ERROR.REQUIRED' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 85%;\">\r\n                <mat-label>{{'CREATE.DIFFICULTY' | translate}}</mat-label>\r\n                <mat-select formControlName=\"difficulty\" style=\"width: 100%\" required>\r\n                    <mat-option *ngFor=\"let diff of difficulties\" [value]=\"diff.value\">{{diff.name}}</mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                    {{'ERROR.REQUIRED' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </form>\r\n\r\n        <form fxLayout=\"column\" fxFlex=\"25\" style=\"width: 100%;\" fxLayoutAlign=\"start center\" [formGroup]=\"form\">\r\n            <mat-form-field style=\"width: 90%; \" class=\"mb-20\">\r\n                <mat-label>{{'CREATE.CRITERION' | translate}}</mat-label>\r\n                <input matInput formControlName=\"criterion\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 90%; \" class=\"mb-20\">\r\n                <mat-label>{{'CREATE.LANGUAGE' | translate}}</mat-label>\r\n                <mat-select formControlName=\"language\" style=\"width: 100%\" required>\r\n                    <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.value\">{{lang.name}}</mat-option>\r\n                </mat-select>\r\n                <mat-error>\r\n                    {{'ERROR.REQUIRED' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 90%;\">\r\n                <mat-label>{{'CREATE.SCORE' | translate}}</mat-label>\r\n                <input matInput formControlName=\"score\" required>\r\n                <mat-error *ngIf=\"form.get('score').hasError('required')\">\r\n                    {{'ERROR.REQUIRED' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"form.get('score').hasError('pattern')\">\r\n                    {{'ERROR.NUMERIC' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </form>\r\n\r\n        <form fxFlex=\"25\" fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"height: 100%\" [formGroup]=\"form\">\r\n            <mat-form-field style=\"width: 95%;\">\r\n                <mat-label>{{'CREATE.EXPIRE_AT' | translate}}</mat-label>\r\n                <input\r\n                    matInput\r\n                    formControlName=\"expire_at\"\r\n                    [matDatepicker]=\"datepicker1\"\r\n                    onkeydown=\"return false\"\r\n                    autocomplete=\"off\"\r\n                >\r\n                <mat-datepicker-toggle matSuffix [for]=\"datepicker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #datepicker1></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 95%;\" appearance=\"outline\">\r\n                <mat-label>{{'CREATE.DESCRIPTION' | translate}}</mat-label>\r\n                <textarea matInput\r\n                    formControlName=\"description\"\r\n                    cdkTextareaAutosize\r\n                    cdkAutosizeMinRows=\"6\"\r\n                    cdkAutosizeMaxRows=\"6\"\r\n                    style=\"position: relative;\"\r\n                ></textarea>\r\n                <mat-error>\r\n                    {{'ERROR.MAX_LENGTH_140' | translate}}\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </form>\r\n\r\n        <form fxLayout=\"column\" fxFlex=\"25\" style=\"width: 100%;\" fxLayoutAlign=\"start center\" [formGroup]=\"form\">\r\n            <mat-form-field style=\"width: 95%; min-height: 119.5px; max-height: 119.5px;\">\r\n                <mat-chip-list #chipList1>\r\n                    <mat-chip *ngFor=\"let skill of skills\" selected [removable]=\"true\" (removed)=\"remove(skill, 'skills')\" color=\"accent\">\r\n                        {{skill}}\r\n                        <mat-icon matChipRemove>cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input \r\n                        placeholder=\"{{ 'CREATE.SKILLS' | translate }}\"\r\n                        [matChipInputFor]=\"chipList1\"\r\n                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                        [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                        (matChipInputTokenEnd)=\"add($event, 'skills')\">\r\n                </mat-chip-list>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 95%; min-height: 119.5px; max-height: 119.5px;\">\r\n                <mat-chip-list #chipList2>\r\n                    <mat-chip *ngFor=\"let tag of tags\" selected [removable]=\"true\" (removed)=\"remove(tag, 'tags')\" color=\"accent\">\r\n                        {{tag}}\r\n                        <mat-icon matChipRemove>cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input \r\n                        placeholder=\"{{ 'CREATE.TAGS' | translate }}\"\r\n                        [matChipInputFor]=\"chipList2\"\r\n                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                        [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                        (matChipInputTokenEnd)=\"add($event, 'tags')\">\r\n                </mat-chip-list>\r\n            </mat-form-field>\r\n        </form>\r\n    </div>\r\n\r\n    <div fxFlex style=\"width: 100%; overflow-y: auto;\">\r\n        <div fxFlex=\"25\" fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"height: 100%;\" class=\"p-8\">\r\n            <img *ngIf=\"!image\" src=\"{{defaultImg}}\" (click)=\"file?.click()\" class=\"placeholder img\" style=\"max-width: 50%; max-height: 100%;\">\r\n            <img *ngIf=\"image\" src=\"{{image}}\" (click)=\"file?.click()\" style=\"max-width: 50%; max-height: 100%;\" class=\"img\">\r\n            <div style=\"width: 100%;\" fxLayoutAlign=\"center center\" class=\"pt-20\">\r\n                <span *ngIf=\"image\" style=\"color: red; cursor: pointer;\" (click)=\"removeImage()\"><b>{{ \"DELETE\" | translate }}</b></span>\r\n            </div>\r\n            <input #file id=\"file-input\" type=\"file\" style=\"display: none;\" (change)=\"preview(file.files)\"/>\r\n        </div>\r\n        <div cdkDropList fxFlex=\"75\" fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"max-height: 100%; overflow-y: scroll; border-left: 1px solid rgba(0,0,0,0.42);\">\r\n            <div *ngFor=\"let element of elementList\" cdkDrag [cdkDragDisabled]=\"true\" class=\"example-box\">\r\n                <span fxFlex=\"55\">{{element.name}}</span>\r\n                <mat-checkbox *ngIf=\"element.first\" disabled color=\"primary\" checked=\"true\" class=\"px-20\">{{ 'CREATE.START' | translate }}</mat-checkbox>\r\n                <mat-checkbox *ngIf=\"element.parent === null\" disabled color=\"primary\" checked=\"true\" class=\"px-20\">{{ 'CREATE.FINISH' | translate }}</mat-checkbox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"10\" style=\"width: 100%\">\r\n        <span class=\"error-msg pl-28\">{{'ERROR.WARN_DISCONNECTED_ELEMENTS' | translate }}</span>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"width: 100%\" class=\"pr-60\">\r\n            <button mat-raised-button color=\"accent\" class=\"mr-24 btn\" (click)=\"dialogRef.close()\">{{ 'CREATE.CANCEL' | translate }}</button>\r\n            <button mat-raised-button color=\"accent\" class=\"btn\" (click)=\"save()\" [disabled]=\"form.invalid\">{{ 'CREATE.SAVE' | translate }}</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #root id=\"root\" fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"page-layout simple\">\r\n    <span style=\"position: absolute; left: 20px; top: 12px\" *ngIf=\"rootName\">\r\n        <b>{{'CREATE.ROOT_ELEMENT' | translate}}: </b>{{rootName}}\r\n    </span>\r\n    <span style=\"position: absolute; left: 20px; top: 12px\" *ngIf=\"!rootName\">\r\n        <b>{{'CREATE.ROOT_ELEMENT' | translate}}: </b>{{'CREATE.NO_ROOT' | translate}}\r\n    </span>\r\n    <button mat-raised-button style=\"position: absolute; left: 20px; bottom: 12px; height: 40px; width: 100px;\"\r\n        color=\"accent\" (click)=\"goViewRoutes()\">{{'CREATE.BACK' | translate}}</button>\r\n    <div #canvascontainer (mousemove)=\"getMousePos($event)\" (mouseup)=\"cancelDragging($event)\" fxLayout=\"row\" class=\"canvas-container\"\r\n        fxLayoutAlign=\"center center\" fxFlex=\"80\" fxFill style=\"border-right: 1px solid #bbb\"\r\n        >\r\n        <canvas id=\"mycanvas\" #mycanvas (click)=\"showMenu = -1\"\r\n            style=\"user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\"></canvas>\r\n        <div *ngFor=\"let element of arrowElements\" [ngStyle]=\"element.style\"matTooltip=\"{{ 'ROUTE.DELETE' | translate }}\"\r\n            matTooltipShowDelay=\"300\" (click)=\"deleteLink(element.id)\"></div>\r\n    </div>\r\n\r\n    <div fxFlex=\"20\" fxLayout=\"column\" style=\"overflow: hidden; height: 100%;\">\r\n        <div fxFlex=\"6\" fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"width: 100%;\" class=\"px-20 pt-12 h-50\">\r\n            <mat-icon *ngIf=\"!draggingArrow\" matTooltip=\"{{ 'CREATE.ADD_ROUTE' | translate }}\" class=\"action-icon mat-card\" (click)=\"setEdit()\">subdirectory_arrow_left</mat-icon>\r\n            <mat-icon *ngIf=\"draggingArrow\" matTooltip=\"{{ 'CREATE.CANCEL' | translate }}\" class=\"action-icon pushed\" (click)=\"cancelEdit()\">subdirectory_arrow_left</mat-icon>\r\n            <img *ngIf=\"!delete\" src=\"assets/icons/eraser.png\" class=\"action-icon mat-card\" style=\"width: 35px; height: 35px; position: relative; left: 8px;\"\r\n                alt=\"eraser\" matTooltip=\"{{ 'CREATE.DELETE_LINK' | translate }}\" (click)=\"setDelete()\">\r\n            <img *ngIf=\"delete\" src=\"assets/icons/eraser.png\" class=\"action-icon pushed\" style=\"width: 35px; height: 35px; position: relative; left: 8px;\"\r\n            alt=\"eraser\" matTooltip=\"{{ 'CREATE.CANCEL' | translate }}\" (click)=\"cancelDelete()\">\r\n            <mat-icon *ngIf=\"action === 'create'\" class=\"action-icon mat-card\" style=\"margin-left: auto;\" (click)=\"resetRoutes();\" matTooltip=\"{{ 'CREATE.RESTART' | translate }}\">replay</mat-icon>\r\n        </div>\r\n        <div fxFlex=\"86\" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"overflow-y: hidden;\">\r\n            <form fxFlex=\"8\" style=\"width: 80%;\" class=\"h-50\" [formGroup]=\"searchForm\">\r\n                <mat-form-field style=\"width: 100%;\" class=\"pb-4\">\r\n                    <mat-label>{{ 'CREATE.SEARCH' | translate }}</mat-label>\r\n                    <input matInput autocomplete=\"off\" formControlName=\"search\" (valueChanges)=\"searchChanged(evt)\">\r\n                </mat-form-field>\r\n            </form>\r\n            <div class=\"example-list\" #container fxFlex fxLayout=\"column\">\r\n                <div id=\"empty\" *ngIf=\"elements.length === 0 && !loading\" style=\"text-align: center;\" fxFlex class=\"p-20\" fxLayoutAlign=\"center center\">\r\n                    <span style=\"font-size: 1.25em;\" class=\"pb-40\">{{ 'CREATE.NO_ELEMENTS' | translate }}</span>\r\n                </div>\r\n                <div *ngFor=\"let element of _elements;\"\r\n                    id=\"{{ 'element_' + element.id }}\"\r\n                    fxLayout=\"column\"\r\n                    fxLayoutAlign=\"center center\"\r\n                    class=\"mat-card mb-40 element-card\"\r\n                    [ngStyle]=\"getSize(element.id)\"\r\n                    cdkDrag\r\n                    [cdkDragDisabled]=\"draggingArrow || delete\"\r\n                    (click)=\"select($event)\"\r\n                    (cdkDragStarted)=\"startDragging($event)\"\r\n                    (cdkDragMoved)=\"movedDragging($event)\"\r\n                    (cdkDragEnded)=\"endDragging($event)\"\r\n                    [cdkDragFreeDragPosition]=\"resetPosition[element.id]\"\r\n                    (mousedown)=\"mousedown()\"\r\n                    (mouseup)=\"mouseup(element.id, $event)\"\r\n                    oncontextmenu=\"return false\"\r\n                >\r\n                    <div fxFlex=\"100\" fxLayoutAlign=\"center center\" style=\"overflow: hidden; border-radius: 100%;\r\n                        user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\">\r\n                        <img *ngIf=\"doesFit(element.name)\" style=\"max-height: 100px; min-height: 100px; height: 100px;\" [ngStyle]=\"getImageSize(element.id)\" src=\"{{element.image_url}}\" onerror=\"this.src='assets/images/error.png';\">\r\n                        <img *ngIf=\"!doesFit(element.name)\" style=\"max-height: 100px; min-height: 100px; height: 100px;\" [ngStyle]=\"getImageSize(element.id)\" src=\"{{element.image_url}}\" onerror=\"this.src='assets/images/error.png';\">\r\n                    </div>\r\n                    <div *ngIf=\"draggingArrow && isSelectable(element.id)\">\r\n                        <div class=\"terminal\" [ngStyle]=\"getTerminalStyle('top', element.id)\"\r\n                            (mousedown)=\"setDragging($event, 'top', element.id)\"\r\n                            (mouseup)=\"setDragging($event, 'none', element.id)\"></div>\r\n                        <div class=\"terminal\" [ngStyle]=\"getTerminalStyle('right', element.id)\"\r\n                            (mousedown)=\"setDragging($event, 'right', element.id)\"\r\n                            (mouseup)=\"setDragging($event, 'none', element.id)\"></div>\r\n                        <div class=\"terminal\" [ngStyle]=\"getTerminalStyle('bottom', element.id)\"\r\n                            (mousedown)=\"setDragging($event, 'bottom', element.id)\"\r\n                            (mouseup)=\"setDragging($event, 'none', element.id)\"></div>\r\n                        <div class=\"terminal\" [ngStyle]=\"getTerminalStyle('left', element.id)\"\r\n                            (mousedown)=\"setDragging($event, 'left', element.id)\"\r\n                            (mouseup)=\"setDragging($event, 'none', element.id)\"></div>\r\n                    </div>\r\n                    <div *ngIf=\"!doesFit(element.name)\" class=\"tooltip\">\r\n                        <span class=\"pt-4\">{{element.name}}</span>\r\n                    </div>\r\n                    <div style=\"width: 200%; height: 20px; text-align: center; font-size: 0.7em; position: absolute; bottom: -25px;\">\r\n                        <span *ngIf=\"doesFit(element.name)\" style=\"user-select: none;-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\"\r\n                            class=\"pt-4\"><b>{{element.name}}</b></span>\r\n                        <span *ngIf=\"!doesFit(element.name)\" style=\"user-select: none;-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\"\r\n                            class=\"pt-4 hideable-text\"><b>{{getElementEllipse(element.name)}}</b></span>\r\n                    </div>\r\n                    <div *ngIf=\"this.showMenu == element.id\" fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"element-menu mat-elevation-z8\">\r\n                        <p style=\"margin: 0; padding: 10px;\"><b>{{element.name}}</b></p>\r\n                        <mat-divider></mat-divider>\r\n                        <div style=\"width: 100%;\" (click)=\"setGoal(element)\">{{ 'CREATE.SET_AS_GOAL' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-8\">\r\n            <button mat-raised-button style=\"height: 42px;\" color=\"accent\" (click)=\"goCreateRoute()\">{{'CREATE.SAVE_ROUTE' | translate}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/delete-dialog/delete-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/delete-dialog/delete-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'DELETE_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'DELETE_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"delete();\">{{'DELETE_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'DELETE_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/detail/detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/detail/detail.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"page-layout simple\">\r\n    <div #mydiv style=\"position: absolute; bottom: 20px; left: 20px; z-index: 999;\">\r\n        <button mat-raised-button color=\"accent\" class=\"m-8\" style=\"width: 100px;\" (click)=\"router.navigate(['routes/consult'])\">{{'CREATE.BACK' | translate}}</button>\r\n        <button [disabled]=\"loadedImages != totalImages\" mat-raised-button color=\"accent\" class=\"m-8\" style=\"width: 100px;\" (click)=\"export()\">{{'CREATE.EXPORT' | translate}}</button>\r\n    </div>\r\n    <div #container style=\"width: 90%; height: 90%; position: relative;\">\r\n        <canvas width=\"{{w}}\" height=\"{{h}}\" #mycanvas style=\"position: absolute; top: 0px; left: 0px\"></canvas>\r\n        <div *ngFor=\"let element of route?.tree\"\r\n            id=\"{{ 'element_' + element.element_id }}\"\r\n            fxLayout=\"column\"\r\n            fxLayoutAlign=\"center center\"\r\n            class=\"mat-card mb-12 element-card\"\r\n            [ngStyle]=\"getDivPosition(element)\"\r\n        >\r\n            <div fxFlex=\"100\" fxLayoutAlign=\"center center\" style=\"overflow: hidden; border-radius: 100%;\">\r\n                <img [ngStyle]=\"getHeight(element)\" src=\"{{getElementImage(element.element_id)}}\" onerror=\"this.src='assets/images/error.png';\">\r\n            </div>\r\n            <div style=\"width: 200%; text-align: center; font-size: 0.7em; position: absolute; bottom: -25px; height: 22px !important;\">\r\n                <span class=\"pt-4\"><b>{{getElementName(element.element_id)}}</b></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/reset-dialog/reset-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/reset-dialog/reset-dialog.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'RESET_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'RESET_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"goViewRoutes();\">{{'RESET_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'RESET_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/route/route.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/route/route.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutAlign=\"center start\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start start\" class=\"mat-card m-20 p-16\"\r\n        style=\"border-radius: 10px !important; width: 400px; min-width: 300px; height: 240px;\">\r\n        <div fxLayout=\"row\" fxFlex=\"80\" style=\"width: 100%;\">\r\n            <div fxFlexOffset=\"5\" fxFlex=\"28\" fxLayoutAlign=\"center center\">\r\n                <img *ngIf=\"img\" src=\"{{url}}?{{getTimestamp()}}\" onerror=\"this.src='assets/images/error.png';\" matTooltip=\"{{route.name}}\">\r\n                <img *ngIf=\"!img\" style=\"border-radius: 100%; border: 1px solid lightgray\" src=\"{{url}}\" matTooltip=\"{{route.name}}\">\r\n            </div>\r\n            <div fxFlex=\"67\" fxLayoutAlign=\"center center\">\r\n                <span style=\"text-align: center; font-size: 1.1em\">{{getEllipsis(route.name)}}</span>\r\n            </div>\r\n        </div>\r\n    \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"15\" fxFlexOffset=\"5\" style=\"width: 100%; height: 50px;\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"button-div left\" (click)=\"view.emit(route.id);\">\r\n                {{ \"ROUTE.VIEW\" | translate }}\r\n            </div>\r\n            <div style=\"width: 0.5%; height: 100%; background-color: #bbb\"></div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"button-div\" (click)=\"edit.emit(route.id);\">\r\n                {{ \"ROUTE.EDIT\" | translate }}\r\n            </div>\r\n            <div style=\"width: 0.5%; height: 100%; background-color: #bbb\"></div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"button-div right\" (click)=\"delete.emit(route.id);\">\r\n                {{ \"ROUTE.DELETE\" | translate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/routes.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/routes.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"page-layout simple\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" class=\"m-28\" style=\"width: 100%\">\r\n        <div *ngFor=\"let route of routes\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.gt-md=\"33\">\r\n            <route [route]=\"route\" (delete)=\"deleteRoute($event)\" (view)=\"viewRoute($event);\" (edit)=\"editRoute($event);\"></route>\r\n        </div>\r\n\r\n        <div *ngIf=\"routes.length === 0 && !loading\" class=\"mt-20\">\r\n            <span style=\"font-size: 1.75em\"><b>{{ 'ROUTE.NO_ROUTES' | translate }}</b></span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dialog {\n  height: 100%;\n  width: 100%;\n  overflow-y: visible; }\n\n.img:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  cursor: pointer !important; }\n\n.placeholder {\n  border: 2px solid lightgray;\n  border-radius: 100%; }\n\n.btn {\n  width: 90px;\n  height: 40px; }\n\n.example-box {\n  padding: 15px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  background: white;\n  width: 95%; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.error-msg {\n  font-size: 0.9em;\n  align-self: flex-start;\n  color: red;\n  text-decoration: underline; }\n\n.mat-chip-list-wrapper {\n  max-height: 80px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vcm91dGVzL2NyZWF0ZS9jcmVhdGUtcm91dGUtZGlhbG9nL2NyZWF0ZS1yb3V0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFFc0MsRUFBQTs7QUFHMUM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxzREFBc0QsRUFBQTs7QUFHMUQ7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0RBQXNELEVBQUE7O0FBRzFEO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vcm91dGVzL2NyZWF0ZS9jcmVhdGUtcm91dGUtZGlhbG9nL2NyZWF0ZS1yb3V0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlhbG9nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxufVxyXG5cclxuLmltZzpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGxhY2Vob2xkZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXJyb3ItbXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateRouteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRouteDialogComponent", function() { return CreateRouteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes.service */ "./src/app/main/routes/routes.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var CreateRouteDialogComponent = /** @class */ (function () {
    function CreateRouteDialogComponent(dialogRef, router, data, snackbar, translate, formBuilder, routesService) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.snackbar = snackbar;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.routesService = routesService;
        this.defaultImg = 'assets/images/placeholder.png';
        this.xpos = 'center';
        this.ypos = 'top';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SEMICOLON"]];
        this.elementList = [];
        this.difficulties = [];
        this.materiality = [];
        this.languages = [{ value: 'es', name: null }, { value: 'en', name: null }, { value: 'pt', name: null },
            { value: 'fr', name: null }, { value: 'other', name: null }];
        this.skills = [];
        this.tags = [];
    }
    CreateRouteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languages.forEach(function (lang) { return lang.name = _this.translate.instant('LANGUAGES.'.concat(lang.value)); });
        this.getData();
    };
    CreateRouteDialogComponent.prototype.add = function (event, name) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            switch (name) {
                case 'tags':
                    this.tags.push(value.trim());
                    break;
                case 'skills':
                    this.skills.push(value.trim());
                    break;
            }
        }
        if (input) {
            input.value = '';
        }
    };
    CreateRouteDialogComponent.prototype.remove = function (skill, name) {
        var index;
        switch (name) {
            case 'tags':
                index = this.tags.indexOf(skill);
                if (index >= 0) {
                    this.tags.splice(index, 1);
                }
                break;
            case 'skills':
                index = this.skills.indexOf(skill);
                if (index >= 0) {
                    this.skills.splice(index, 1);
                }
                break;
        }
    };
    CreateRouteDialogComponent.prototype.getData = function () {
        var _this = this;
        this.elementList = this.data.elements.reverse();
        this.difficulties = this.data.difficulties;
        this.materiality = this.data.materiality;
        if (this.data.route) {
            var r = this.data.route;
            this.form = this.formBuilder.group({
                name: [r.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
                description: [r.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(140)],
                difficulty: [r.difficulty, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                score: [r.score, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                skills: [''],
                tags: [''],
                criterion: [r.criterion],
                materiality: [r.materiality, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                expire_at: [r.expire_at],
                language: [r.language, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            this.skills = r.skills.trim().length > 0 ? r.skills.split(';') : [];
            this.tags = r.tags.trim().length > 0 ? r.tags.split(';') : [];
        }
        else {
            this.form = this.formBuilder.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(140)],
                difficulty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                score: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                skills: [''],
                tags: [''],
                criterion: [''],
                materiality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                expire_at: [null],
                language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        if (this.data.image) {
            this.routesService.getRouteImage(this.data.route.id).subscribe(function (res) {
                var reader = new FileReader();
                reader.readAsDataURL(res);
                reader.onload = function (event) {
                    _this.image = reader.result;
                };
            });
        }
    };
    CreateRouteDialogComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length !== 1)
            return;
        if (files[0].type !== 'image/png') {
            this.snackbar.open(this.translate.instant('ERROR.IMAGE_TYPE_ERROR'), 'ERROR', {
                horizontalPosition: this.xpos,
                verticalPosition: this.ypos,
                duration: 5000,
                panelClass: 'red',
            });
            return;
        }
        if (files[0].size > 2097152) {
            this.snackbar.open(this.translate.instant('ERROR.MAX_FILE_SIZE'), 'ERROR', {
                horizontalPosition: this.xpos,
                verticalPosition: this.ypos,
                duration: 5000,
                panelClass: 'red',
            });
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.image = reader.result;
        };
    };
    CreateRouteDialogComponent.prototype.removeImage = function () {
        this.file.nativeElement.value = '';
        this.image = null;
    };
    CreateRouteDialogComponent.prototype.save = function () {
        var file = null;
        if (this.image && this.file.nativeElement.files[0]) {
            file = new FormData();
            file.append('archivo', this.file.nativeElement.files[0]);
        }
        this.form.patchValue({
            skills: this.skills.join(';'),
            tags: this.tags.join(';')
        });
        this.dialogRef.close({
            formdata: file,
            form: this.form.value
        });
    };
    CreateRouteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _routes_service__WEBPACK_IMPORTED_MODULE_6__["RoutesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('route'),
        __metadata("design:type", Object)
    ], CreateRouteDialogComponent.prototype, "route", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file', { static: false }),
        __metadata("design:type", Object)
    ], CreateRouteDialogComponent.prototype, "file", void 0);
    CreateRouteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-route-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-route-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./create-route-dialog.component.scss */ "./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _routes_service__WEBPACK_IMPORTED_MODULE_6__["RoutesService"]])
    ], CreateRouteDialogComponent);
    return CreateRouteDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/routes/create/create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/routes/create/create.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".element-container {\n  max-height: 84vh !important;\n  height: 84vh !important;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n.h-50 {\n  min-height: 50px !important; }\n\n.action-icon {\n  width: 35px;\n  height: 35px;\n  font-size: 35px;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: #fff; }\n\n.pushed {\n  box-shadow: 0 0 1px 1.8px #bbb; }\n\n.element-card {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%;\n  cursor: pointer; }\n\n.element-card.cdk-drag-disabled {\n  cursor: default !important;\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9); }\n\n.element-card:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9); }\n\n.element-card:hover .tooltip {\n    display: block;\n    -webkit-animation: fadein 0.3s;\n            animation: fadein 0.3s; }\n\n.element-card:hover .hideable-text {\n    display: none; }\n\n.terminal {\n  border-radius: 100%;\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  background-color: #000;\n  opacity: 0.25;\n  cursor: pointer;\n  display: block !important;\n  z-index: 99;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n.example-list {\n  width: 100%;\n  display: block !important;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.add-icon {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  height: 35px;\n  width: 35px;\n  font-size: 35px;\n  cursor: pointer; }\n\n.canvas-container {\n  max-width: 80% !important;\n  width: 80% !important;\n  height: 100% !important;\n  max-height: calc(100vh - 64px); }\n\n.tooltip {\n  width: 200%;\n  text-align: center;\n  font-size: 0.72em;\n  position: absolute;\n  bottom: -25px;\n  display: none;\n  background-color: rgba(20, 20, 20, 0.6);\n  padding: 8px;\n  color: white;\n  border-radius: 5px;\n  -webkit-animation: fadeout 0.25s;\n          animation: fadeout 0.25s; }\n\n.element-menu {\n  width: 280px;\n  position: absolute;\n  top: -20px;\n  left: 105px;\n  background-color: white;\n  border-radius: 8px;\n  text-align: center; }\n\n.element-menu p {\n    font-size: 12px;\n    cursor: default; }\n\n.element-menu div {\n    padding: 10px;\n    background-color: white;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px; }\n\n.element-menu div:hover {\n    -webkit-filter: brightness(0.85) !important;\n            filter: brightness(0.85) !important;\n    cursor: pointer; }\n\n.mat-simple-snackbar-action {\n  color: #333 !important; }\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vcm91dGVzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEI7RUFDMUIsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLCtCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFEM0I7SUFJUSxjQUFjO0lBQ2QsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFBOztBQUw5QjtJQVNRLGFBQWEsRUFBQTs7QUFJckI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFQdEI7SUFVUSxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQVh2QjtJQWVRLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQixFQUFBOztBQWxCdkM7SUFzQlEsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0k7SUFBTyxVQUFVLEVBQUE7RUFDakI7SUFBTyxVQUFVLEVBQUEsRUFBQTs7QUFGckI7RUFDSTtJQUFPLFVBQVUsRUFBQTtFQUNqQjtJQUFPLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yb3V0ZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGVtZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NHZoICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDg0dmggIWltcG9ydGFudDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5oLTUwIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnB1c2hlZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDEuOHB4ICNiYmI7XHJcbn1cclxuXHJcbi5lbGVtZW50LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZWxlbWVudC1jYXJkLmNkay1kcmFnLWRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgfVxyXG5cclxuLmVsZW1lbnQtY2FyZDpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuXHJcbiAgICAudG9vbHRpcCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAuaGlkZWFibGUtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hZGQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW52YXMtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjYpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuMjVzO1xyXG59XHJcblxyXG4uZWxlbWVudC1tZW51IHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0OiAxMDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpob3ZlciB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/routes/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/routes/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent, CancelDialogComponent, ResetDialogComponent, RootDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelDialogComponent", function() { return CancelDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetDialogComponent", function() { return ResetDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootDialogComponent", function() { return RootDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes.service */ "./src/app/main/routes/routes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/es */ "./src/app/main/routes/i18n/es.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _create_route_dialog_create_route_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-route-dialog/create-route-dialog.component */ "./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};













var CreateComponent = /** @class */ (function () {
    function CreateComponent(_fuseTranslationLoaderService, fuseProgressBarService, router, fuseConfigService, routesService, formBuilder, translateService, changesDetector, dialog, snack, activatedRoute) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.fuseProgressBarService = fuseProgressBarService;
        this.router = router;
        this.fuseConfigService = fuseConfigService;
        this.routesService = routesService;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.changesDetector = changesDetector;
        this.dialog = dialog;
        this.snack = snack;
        this.activatedRoute = activatedRoute;
        this.dragging = false;
        this.draggingArrow = false;
        this.start = false;
        this.end = false;
        this.delete = false;
        this.action = '';
        this.loading = true;
        this.dragCount = 0;
        this.initialPos = { x: 0, y: 0 };
        this.resetPosition = {};
        this.size = 50;
        this.tempEl = {};
        this.arrowElements = [];
        this.elements = [];
        this._elements = [];
        this.elementList = [];
        this.elementRefs = [];
        this.routes = [];
        this.difficulties = [];
        this.materialities = [];
        this.levels = [];
        this.xPos = 'center';
        this.yPos = 'top';
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false
                },
                toolbar: {
                    hidden: false
                }
            }
        };
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_7__["locale"]);
    }
    CreateComponent.prototype.onKeydownHandler = function (event) {
        this.showMenu = -1;
        if (this.tempEl.start) {
            this.cancelDragging(event);
        }
        else {
            this.cancelEdit();
            this.cancelDelete();
        }
    };
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ctx = this.canvas.nativeElement.getContext("2d");
        this.fuseProgressBarService.show();
        this.activatedRoute.paramMap.subscribe(function (res) {
            if (res.params.routeId) {
                _this.action = 'edit';
                _this.getRoute(res.params.routeId);
            }
            else {
                _this.action = 'create';
                if (!_this.route) {
                    _this.routesService.routeName = _this.translateService.instant('CREATE.NEW_ROUTE');
                }
            }
        });
        this.searchForm = this.formBuilder.group({
            search: ['']
        });
        this.searchChanged();
        this.getDifficulties();
        this.getElements();
        this.getMateriality();
    };
    CreateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas.nativeElement.width = this.canvas_container.nativeElement.offsetWidth;
        this.canvas.nativeElement.height = this.canvas_container.nativeElement.offsetHeight;
        this.events = this.divs.changes.subscribe(function (val) {
            var e_1, _a;
            var data = val.first.nativeElement.children;
            var index = 0;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var element = data_1_1.value;
                    if (element.id === 'empty')
                        continue;
                    var id = _this.elements[index++].id;
                    _this.elementRefs.push({ div_id: element.id, el_id: id });
                    _this.resetPosition[id] = _this.initialPos;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.W = _this.canvas.nativeElement.clientWidth;
            _this.H = _this.canvas.nativeElement.clientHeight;
            _this.activatedRoute.paramMap.subscribe(function (res) {
                if (res.params.routeId) {
                    var interval_1 = setInterval(function () {
                        if (_this.route && _this.elementList) {
                            clearInterval(interval_1);
                            _this.initRoutes(_this.route.tree);
                            _this.assignCoordinates();
                            _this.redraw();
                            _this.fuseProgressBarService.hide();
                        }
                    }, 100);
                }
                else
                    _this.fuseProgressBarService.hide();
            });
            _this.events.unsubscribe();
        });
    };
    CreateComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.canvas.nativeElement.width = this.canvas_container.nativeElement.offsetWidth;
        this.canvas.nativeElement.height = this.canvas_container.nativeElement.offsetHeight;
        this.rootX = this.rootEl.nativeElement.offsetWidth;
        this.rootY = this.rootEl.nativeElement.offsetHeight;
        if (!this.dragging) {
            var _loop_1 = function (i) {
                var el = this_1.elementRefs.find(function (__el) { return __el.el_id == _this.elementList[i].id; });
                var distance = this_1.getTranslate3DValues(this_1.elementList[i].id)[0];
                if (this_1.divs.first.nativeElement.children[el.div_id].offsetLeft + distance + this_1.size > this_1.canvas_container.nativeElement.offsetWidth) {
                    this_1.deleteElement(el);
                }
            };
            var this_1 = this;
            for (var i = this.elementList.length - 1; i >= 0; i--) {
                _loop_1(i);
            }
        }
        this.changesDetector.detectChanges();
        this.redraw();
    };
    CreateComponent.prototype.ngDoCheck = function () {
        this.offset = this.container.nativeElement.scrollTop;
    };
    CreateComponent.prototype.getDifficulties = function () {
        var _this = this;
        this.routesService.getDifficulty().subscribe(function (res) {
            res.forEach(function (d) { return _this.difficulties.push({ value: d.descripcion, name: _this.translateService.instant('DIFFICULTY.'.concat(d.descripcion)) }); });
        });
    };
    CreateComponent.prototype.getRoute = function (id) {
        var _this = this;
        this.routesService.getRoute(id).subscribe(function (res) {
            _this.route = res;
            _this.routesService.routeName = res.name;
        });
    };
    CreateComponent.prototype.getElements = function () {
        var _this = this;
        this.routesService.getElementList().subscribe(function (res) {
            var e_2, _a;
            var _loop_2 = function (element) {
                if (!element.image_url.includes('http')) {
                    _this.routesService.getElementImage(element.id).subscribe(function (res) {
                        var reader = new FileReader();
                        reader.readAsDataURL(res);
                        reader.onload = function (event) {
                            element.image_url = reader.result;
                        };
                    });
                }
            };
            try {
                for (var res_1 = __values(res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                    var element = res_1_1.value;
                    _loop_2(element);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.loading = false;
            _this.elements = res;
            _this._elements = _this.elements;
            _this.fuseProgressBarService.hide();
        });
    };
    CreateComponent.prototype.getMateriality = function () {
        var _this = this;
        this.routesService.getMateriality().subscribe(function (res) {
            res.forEach(function (el) { return _this.materialities
                .push({ value: el.descripcion, name: _this.translateService.instant('MATERIALITY.'.concat(el.descripcion)) }); });
        });
    };
    CreateComponent.prototype.resetRoutes = function () {
        var _this = this;
        if (this.root) {
            var dialog = this.dialog.open(ResetDialogComponent, {
                data: {}
            });
            dialog.afterClosed().subscribe(function (res) {
                if (typeof res !== 'undefined')
                    _this.doReset();
            });
        }
        else
            this.doReset();
    };
    CreateComponent.prototype.doReset = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.elementRefs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                this.deleteElement(element);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.cancelEdit();
    };
    CreateComponent.prototype.startDragging = function (e) {
        this.actualCount++;
        this.dragging = true;
        this.showMenu = -1;
        var el = this.elementRefs.find(function (element) { return element.div_id === e.source.element.nativeElement.id; });
        if (!e.source.element.nativeElement.selected) {
            e.source.element.nativeElement.style.left = e.source.element.nativeElement.offsetLeft + 'px';
            if (this.offset > 0) {
                e.source.element.nativeElement.style.top = e.source.element.nativeElement.offsetTop - this.offset + 'px';
            }
            else {
                e.source.element.nativeElement.style.top = e.source.element.nativeElement.offsetTop + 'px';
            }
        }
        else {
            e.source.element.nativeElement.style.left = e.source.element.nativeElement.offsetLeft + 'px';
            e.source.element.nativeElement.style.top = e.source.element.nativeElement.offsetTop + 'px';
        }
        if (!e.source.element.nativeElement.selected) {
            this.autoConnect(el);
        }
        e.source.element.nativeElement.style.position = 'absolute';
        e.source.element.nativeElement.style.cursor = 'move';
        e.source.element.nativeElement.selectable = false;
        e.source.element.nativeElement.selected = true;
    };
    CreateComponent.prototype.movedDragging = function (e) {
        this.redraw();
    };
    CreateComponent.prototype.endDragging = function (e) {
        var el = this.elementRefs.find(function (element) { return element.div_id === e.source.element.nativeElement.id; });
        var transformed = this.getTranslate3DValues(el.el_id);
        var deleted = false;
        if (e.source.element.nativeElement.offsetLeft + transformed[0] + this.size > this.canvas_container.nativeElement.offsetWidth) {
            deleted = true;
            this.deleteElement(el);
        }
        else {
            if (!this.elementList.find(function (_el) { return _el.id == el.el_id; })) {
                this.elementList.push(this.elements.find(function (_el) { return _el.id === el.el_id; }));
            }
            if (!this.root) {
                this.root = el.el_id;
                this.rootName = this.elements.find(function (element) { return el.el_id == element.id; }).name;
            }
        }
        if (!deleted) {
            var offset = this.root == el.el_id ? 100 : 0;
            var _y = transformed[1];
            if (e.source.element.nativeElement.offsetTop + transformed[1] < -this.size) { // Mover Y hacia abajo
                this.resetPosition[el.el_id] = { x: transformed[0], y: transformed[1] - (e.source.element.nativeElement.offsetTop + transformed[1]) };
                _y = transformed[1] - (e.source.element.nativeElement.offsetTop + transformed[1]);
            }
            if (e.source.element.nativeElement.offsetTop + transformed[1] + offset > this.rootY - this.size) { // Mover Y hacia arriba
                this.resetPosition[el.el_id] = { x: transformed[0], y: this.rootY - 2.5 * this.size - offset - e.source.element.nativeElement.offsetTop };
                _y = this.rootY - 2.5 * this.size - offset - e.source.element.nativeElement.offsetTop;
            }
            if (e.source.element.nativeElement.offsetLeft + transformed[0] < -this.size) { // Mover X hacia la derecha
                this.resetPosition[el.el_id] = { x: transformed[0] - (e.source.element.nativeElement.offsetLeft + transformed[0]), y: _y };
            }
        }
        this.dragging = false;
        this.redraw();
    };
    CreateComponent.prototype.mousedown = function () {
        this.actualCount = this.dragCount;
    };
    CreateComponent.prototype.mouseup = function (id, e) {
        if (e.button == 2) {
            if (this.actualCount === this.dragCount && this.elementList.find(function (e) { return e.id == id; }) && this.root != id) {
                this.showMenu = id;
            }
            else {
                this.showMenu = -1;
            }
        }
    };
    CreateComponent.prototype.setGoal = function (element) {
        var _this = this;
        this.showMenu = -1;
        var dialog = this.dialog.open(RootDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined') {
                var changed = false;
                for (var i = _this.routes.length - 1; i >= 0; i--) {
                    if (_this.routes[i].start.el_id == element.id) {
                        _this.routes.splice(i, 1);
                        _this.root = element.id;
                        _this.rootName = element.name;
                        _this.elementList.splice(_this.elementList.findIndex(function (e) { return e.id == element.id; }), 1);
                        _this.elementList.unshift(element);
                        changed = true;
                    }
                }
                if (changed)
                    return;
                _this.root = element.id;
                _this.rootName = element.name;
                var _element = _this.elementList.find(function (e) { return e.id == element.id; });
                _this.elementList.splice(_this.elementList.findIndex(function (e) { return e.id == element.id; }), 1);
                _this.elementList.unshift(_element);
            }
        });
    };
    CreateComponent.prototype.initRoutes = function (tree) {
        var e_4, _a;
        var _loop_3 = function (route) {
            if (route.parent_element_id === 0) {
                this_2.root = this_2.elements.find(function (element) { return element.id === route.element_id; }).id;
                this_2.rootName = this_2.elements.find(function (element) { return element.id === route.element_id; }).name;
                this_2.elementList.push(this_2.elements.find(function (element) { return element.id === route.element_id; }));
                return "continue";
            }
            this_2.routes.push({ start: this_2.elementRefs.find(function (element) { return element.el_id === route.element_id; }),
                end: this_2.elementRefs.find(function (element) { return element.el_id === route.parent_element_id; }) });
            this_2.elementList.push(this_2.elements.find(function (element) { return element.id === route.element_id; }));
        };
        var this_2 = this;
        try {
            for (var tree_1 = __values(tree), tree_1_1 = tree_1.next(); !tree_1_1.done; tree_1_1 = tree_1.next()) {
                var route = tree_1_1.value;
                _loop_3(route);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (tree_1_1 && !tree_1_1.done && (_a = tree_1.return)) _a.call(tree_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    CreateComponent.prototype.assignCoordinates = function () {
        var e_5, _a;
        var _loop_4 = function (i, element) {
            var node = this_3.route.tree.find(function (n) { return n.element_id == element.id; });
            this_3.divs.first.nativeElement.children['element_' + node.element_id].style.position = 'absolute';
            this_3.divs.first.nativeElement.children['element_' + node.element_id].style.left = node.x * (this_3.canvas_container.nativeElement.offsetWidth - 100) / 100 + 'px';
            this_3.divs.first.nativeElement.children['element_' + node.element_id].style.top = node.y * (this_3.canvas_container.nativeElement.offsetHeight - 100) / 100 + 'px';
            this_3.divs.first.nativeElement.children['element_' + node.element_id].style.transform = 'translate3d(0px, 0px, 0px)';
            this_3.divs.first.nativeElement.children['element_' + node.element_id].selected = true;
            this_3.divs.first.nativeElement.children['element_' + node.element_id].selectable = true;
        };
        var this_3 = this;
        try {
            for (var _b = __values(this.elementList.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], element = _d[1];
                _loop_4(i, element);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    CreateComponent.prototype.autoConnect = function (element) {
        // let last = this.routes.length > 0 ? this.routes[this.routes.length-1].start : null;
        // if(this.root) {
        //   if(last) {
        //     this.routes.push({ start: element, end: last });
        //   } else {
        //     let root = this.elementRefs.find(el => el.el_id == this.root);
        //     this.routes.push({ start: element, end: root })
        //   }
        // }
    };
    CreateComponent.prototype.searchChanged = function () {
        var _this = this;
        this.searchForm.valueChanges.subscribe(function (form) {
            if (form.search === '')
                _this._elements = _this.elements;
            else {
                _this._elements = __spread(_this.elementList);
                _this.elements.forEach(function (el) {
                    if (el.name.toLowerCase().includes(form.search.toLowerCase()) && !_this._elements.find(function (_el) { return _el.id == el.id; }))
                        _this._elements.push(el);
                });
            }
        });
    };
    CreateComponent.prototype.filterMovedElements = function () {
        var _this = this;
        return this.elementList.map(function (element) { return _this.elements.find(function (el) { return el.id === element.id; }); });
    };
    CreateComponent.prototype.setEdit = function () {
        this.draggingArrow = true;
        this.delete = false;
    };
    CreateComponent.prototype.cancelEdit = function () {
        this.draggingArrow = false;
        this.delete = false;
    };
    CreateComponent.prototype.setDelete = function () {
        this.constructDivs();
        this.draggingArrow = false;
        this.delete = true;
    };
    CreateComponent.prototype.cancelDelete = function () {
        this.arrowElements = [];
        this.draggingArrow = false;
        this.delete = false;
    };
    CreateComponent.prototype.select = function (e) {
        // let el = e.path.find(element => element.id !== '');
        // if(!el.selectable) {
        // el.selectable = true;
        // } else {
        // let id = this.elementRefs.find(element => element.div_id === el.id);
        // if(this.start) {
        //   this.start = false;
        //   this.tempEl['start'] = id;
        // } else if(this.end) {
        //   this.start = true;
        //   this.tempEl['end'] = id;
        //   console.log(this.tempEl);
        //   this.pushRoute();
        // } 
        // else 
        // if(this.delete) {
        //   this.deleteLink(id.el_id);
        // }
        // }
    };
    CreateComponent.prototype.setDragging = function (e, pos, id) {
        this.arrowElements = [];
        this.dragCount++;
        var el = this.elementRefs.find(function (element) { return element.el_id === id; });
        if (!this.tempEl.start) {
            if (e.type !== 'mousedown') {
                this.tempEl = {};
                return;
            }
            var offsetX = void 0, offsetY = void 0;
            if (id == this.root) {
                switch (pos) {
                    case 'top':
                        offsetX = 91;
                        offsetY = -17;
                        break;
                    case 'right':
                        offsetX = 200;
                        offsetY = 91;
                        break;
                    case 'bottom':
                        offsetX = 91;
                        offsetY = 200;
                        break;
                    case 'left':
                        offsetX = -17;
                        offsetY = 91;
                        break;
                    case 'none':
                        offsetX = 0;
                        offsetY = 0;
                        break;
                }
            }
            else {
                switch (pos) {
                    case 'top':
                        offsetX = 41;
                        offsetY = -17;
                        break;
                    case 'right':
                        offsetX = 100;
                        offsetY = 41;
                        break;
                    case 'bottom':
                        offsetX = 41;
                        offsetY = 100;
                        break;
                    case 'left':
                        offsetX = -17;
                        offsetY = 41;
                        break;
                    case 'none':
                        offsetX = 0;
                        offsetY = 0;
                        break;
                }
            }
            var div3d = this.getTranslate3DValues(id);
            this.Xi = parseInt(this.divs.first.nativeElement.children[el.div_id].style.left.replace('px', '')) +
                div3d[0] + offsetX + e.target.offsetWidth / 2;
            this.Yi = parseInt(this.divs.first.nativeElement.children[el.div_id].style.top.replace('px', '')) +
                div3d[1] + offsetY + e.target.offsetHeight / 2;
            this.tempEl['start'] = el;
        }
        else {
            // if(e.type !== 'mouseup') {
            //   this.tempEl = {};
            //   return;
            // }
            this.tempEl['end'] = el;
            this.pushRoute();
            this.tempEl = {};
            this.Xi = null;
            this.Yi = null;
        }
    };
    CreateComponent.prototype.cancelDragging = function (e) {
        this.tempEl = {};
        this.Xi = null;
        this.Yi = null;
    };
    CreateComponent.prototype.getMousePos = function (e) {
        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY;
    };
    CreateComponent.prototype.pushRoute = function () {
        var e_6, _a;
        var err = false;
        if (this.tempEl.start === this.tempEl.end) {
            err = true;
            // this.snack.open(this.translateService.instant('ERROR.ROUTE_SELF'), 'WARNING', {
            //   horizontalPosition: this.xPos,
            //   verticalPosition: this.yPos,
            //   duration: 5000,
            //   panelClass: 'yellow',
            // });
        }
        if (this.tempEl.start.el_id == this.elementList[0].id) {
            err = true;
            this.snack.open(this.translateService.instant('ERROR.PARENT_ROUTE'), 'WARNING', {
                horizontalPosition: this.xPos,
                verticalPosition: this.yPos,
                duration: 5000,
                panelClass: 'yellow',
            });
        }
        if (!err) {
            try {
                for (var _b = __values(this.routes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var element = _c.value;
                    if (this.tempEl.start === element.start) {
                        err = true;
                        this.snack.open(this.translateService.instant('ERROR.PARENTS'), 'WARNING', {
                            horizontalPosition: this.xPos,
                            verticalPosition: this.yPos,
                            duration: 5000,
                            panelClass: 'yellow',
                        });
                        break;
                    }
                    if ((element.start === this.tempEl.start && element.end === this.tempEl.end) ||
                        (element.start === this.tempEl.end && element.end === this.tempEl.start)) {
                        err = true;
                        this.snack.open(this.translateService.instant('ERROR.ROUTE_REPEAT'), 'WARNING', {
                            horizontalPosition: this.xPos,
                            verticalPosition: this.yPos,
                            duration: 5000,
                            panelClass: 'yellow',
                        });
                        break;
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (!err) {
            this.routes.push(__assign({}, this.tempEl));
            this.tempEl = {};
            this.redraw();
        }
    };
    CreateComponent.prototype.redraw = function () {
        var e_7, _a;
        this.ctx.clearRect(0, 0, this.canvas_container.nativeElement.offsetWidth, this.canvas_container.nativeElement.offsetHeight);
        var start;
        var end;
        var angle;
        var points;
        var arrowPoints;
        if (this.tempEl.start) {
            angle = this.getAngle(this.mouseX, this.mouseY, this.Xi, this.Yi);
            points = this.getPlainCoordinates(this.Xi, this.Yi, this.mouseX, this.mouseY, angle);
            arrowPoints = this.getArrowHead(points[4], points[5], points[6]);
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.fillStyle = '#6a6a6a';
            this.ctx.strokeStyle = '#6a6a6a';
            this.ctx.moveTo(points[0], points[1]);
            this.ctx.lineTo(points[2], points[3]);
            this.ctx.lineTo(points[4], points[5]);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.lineWidth = 2.5;
            this.ctx.moveTo(points[4], points[5]);
            this.ctx.lineTo(arrowPoints[0], arrowPoints[1]);
            this.ctx.moveTo(points[4], points[5]);
            this.ctx.lineTo(arrowPoints[2], arrowPoints[3]);
            this.ctx.stroke();
        }
        try {
            for (var _b = __values(this.routes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], route = _d[1];
                start = this.getPoints(route.start);
                end = this.getPoints(route.end);
                angle = this.getAngle(end[1] + this.size, end[0] + this.size, start[1] + this.size, start[0] + this.size);
                points = this.getCoordinates(start[0], start[1], end[0], end[1], angle, route.end.el_id == this.root);
                arrowPoints = this.getArrowHead(points[6], points[7], points[8]);
                this.ctx.beginPath();
                this.ctx.lineWidth = 2;
                this.ctx.fillStyle = '#6a6a6a';
                this.ctx.strokeStyle = '#6a6a6a';
                this.ctx.moveTo(points[0], points[1]);
                this.ctx.lineTo(points[2], points[3]);
                this.ctx.lineTo(points[4], points[5]);
                this.ctx.lineTo(points[6], points[7]);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.lineWidth = 2.5;
                this.ctx.moveTo(points[6], points[7]);
                this.ctx.lineTo(arrowPoints[0], arrowPoints[1]);
                this.ctx.moveTo(points[6], points[7]);
                this.ctx.lineTo(arrowPoints[2], arrowPoints[3]);
                this.ctx.stroke();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    CreateComponent.prototype.getArrowHead = function (x1, y1, direction) {
        switch (direction) {
            case 0: return this.getArrowPoints(x1, y1, 0);
            case 1: return this.getArrowPoints(x1, y1, 270);
            case 2: return this.getArrowPoints(x1, y1, 180);
            case 3: return this.getArrowPoints(x1, y1, 90);
            default: return null;
        }
    };
    CreateComponent.prototype.getArrowPoints = function (x1, y1, angle) {
        var size = 13;
        var radians0 = angle * (Math.PI / 180);
        var radians1 = (angle * (Math.PI / 180)) + Math.PI + Math.PI / 6;
        var radians2 = (angle * (Math.PI / 180)) + Math.PI - Math.PI / 6;
        var offset = (angle > 0 && angle < 90) || angle > 270 ? -2 * Math.asin(Math.sin(radians0)) : 2 * Math.asin(Math.sin(radians0));
        return [x1 + (size * Math.cos(radians1 + offset)), y1 + (size * Math.sin(radians1 + offset)),
            x1 + (size * Math.cos(radians2 + offset)), y1 + (size * Math.sin(radians2 + offset))];
    };
    CreateComponent.prototype.getPlainCoordinates = function (x1, y1, x2, y2, angle) {
        if (Math.abs(x2 - x1) < this.size * 2 || Math.abs(y2 - y1) < this.size * 2) {
            if (angle < 45) {
                return [x1, y1, x1, y2, x2, y2, 2];
            }
            else if (angle < 90) {
                return [x1, y1, x1, y2, x2, y2, 2];
            }
            else if (angle < 135) {
                return [x1, y1, x2, y1, x2, y2, 3];
            }
            else if (angle < 180) {
                return [x1, y1, x2, y1, x2, y2, 3];
            }
            else if (angle > 225) {
                return [x1, y1, x1, y2, x2, y2, 0];
            }
            else if (angle < 270) {
                return [x1, y1, x1, y2, x2, y2, 0];
            }
            else if (angle < 315) {
                return [x1, y1, x2, y1, x2, y2, 1];
            }
            else {
                return [x1, y1, x2, y1, x2, y2, 1];
            }
        }
        else {
            if (angle < 90) {
                return [x1, y1, x1, y2, x2, y2, 2];
            }
            else if (angle < 180) {
                return [x1, y1, x1, y2, x2, y2, 2];
            }
            else if (angle < 270) {
                return [x1, y1, x1, y2, x2, y2, 0];
            }
            else {
                return [x1, y1, x1, y2, x2, y2, 0];
            }
        }
    };
    CreateComponent.prototype.getCoordinates = function (x1, y1, x2, y2, angle, root) {
        if (root) {
            if (Math.abs(x2 - x1) < this.size * 2.5 || Math.abs(y2 - y1) < this.size * 2.5) {
                if (angle > 315 || angle < 45) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y2 + this.size * 2,
                        x2,
                        y2 + this.size * 2,
                        0,
                        true
                    ];
                }
                else if (angle < 135) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        y2 + 2 * this.size * 2,
                        3,
                        true
                    ];
                }
                else if (angle < 225) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y2 + this.size * 2,
                        x2 + this.size * 2 * 2,
                        y2 + this.size * 2,
                        2,
                        true
                    ];
                }
                else {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        y2,
                        1,
                        true
                    ];
                }
            }
            else {
                if (angle < 90 || angle > 270) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x2,
                        y2 + this.size * 2,
                        0,
                        false
                    ];
                }
                else {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x2 + this.size * 2 * 2,
                        y2 + this.size * 2,
                        2,
                        false
                    ];
                }
            }
        }
        else {
            if (Math.abs(x2 - x1) < this.size * 2.5 || Math.abs(y2 - y1) < this.size * 2.5) {
                if (angle > 315 || angle < 45) {
                    return [x1 + this.size, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y2 + this.size, x2, y2 + this.size, 0, true];
                }
                else if (angle < 135) {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, y2 + 2 * this.size, 3, true];
                }
                else if (angle < 225) {
                    return [x1 + this.size, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y2 + this.size, x2 + this.size * 2, y2 + this.size, 2, true];
                }
                else {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, y2, 1, true];
                }
            }
            else {
                if (angle < 90 || angle > 270) {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, y2 + this.size, x1 + this.size, y2 + this.size, x2, y2 + this.size, 0, false];
                }
                else {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, y2 + this.size, x1 + this.size, y2 + this.size, x2 + this.size * 2, y2 + this.size, 2, false];
                }
            }
        }
    };
    CreateComponent.prototype.getFinalPositionFactors = function (angle) {
        var radians = angle * (Math.PI / 180);
        if (angle < 90) {
            return [this.size - this.size * Math.cos(radians), this.size + this.size * Math.sin(radians)];
        }
        else if (angle < 180) {
            return [this.size + this.size * Math.cos(radians + Math.PI), this.size + this.size * Math.sin(radians)];
        }
        else if (angle < 270) {
            return [this.size - this.size * Math.cos(radians), this.size + this.size * Math.sin(radians)];
        }
        else {
            return [this.size + this.size * Math.cos(radians + Math.PI), this.size + this.size * Math.sin(radians)];
        }
    };
    CreateComponent.prototype.getAngle = function (currX, currY, endX, endY) {
        var angle = Math.atan2(currX - endX, currY - endY) * (180 / Math.PI);
        if (angle < 0) {
            angle = Math.abs(angle);
        }
        else {
            angle = 360 - angle;
        }
        return angle;
    };
    ;
    CreateComponent.prototype.getPoints = function (element) {
        var x = this.getTranslate3DValues(element.el_id);
        return [parseInt(this.divs.first.nativeElement.children[element.div_id].style.left.replace('px', '')) + x[0],
            parseInt(this.divs.first.nativeElement.children[element.div_id].style.top.replace('px', '')) + x[1]];
    };
    CreateComponent.prototype.deleteLink = function (element_id) {
        var e_8, _a;
        try {
            for (var _b = __values(this.routes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], route = _d[1];
                if (route.start.el_id == element_id) {
                    this.routes.splice(i, 1);
                    this.arrowElements.splice(this.arrowElements.findIndex(function (el) { return element_id == el.id; }), 1);
                    break;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.redraw();
    };
    CreateComponent.prototype.deleteElement = function (element) {
        var e_9, _a;
        var _this = this;
        this.divs.first.nativeElement.children[element.div_id].style.position = 'initial';
        this.divs.first.nativeElement.children[element.div_id].style.left = 'unset';
        this.divs.first.nativeElement.children[element.div_id].style.top = 'unset';
        this.divs.first.nativeElement.children[element.div_id].selected = false;
        this.resetPosition[element.el_id] = { x: 0, y: 0 };
        if (this.elementList[0] && element.el_id == this.elementList[0].id) {
            this.root = null;
            this.rootName = null;
            if (this.elementList[1]) {
                this.root = this.elementList[1].id;
                this.rootName = this.elements.find(function (element) { return _this.root == element.id; }).name;
            }
        }
        try {
            for (var _b = __values(this.elementList.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], el = _d[1];
                if (el.id === element.el_id)
                    this.elementList.splice(i, 1);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
        for (var i = this.routes.length - 1; i >= 0; i--) {
            if (this.routes[i].start.el_id == element.el_id || this.routes[i].end.el_id == element.el_id) {
                this.routes.splice(i, 1);
            }
        }
        this.redraw();
    };
    CreateComponent.prototype.constructElementList = function () {
        var e_10, _a;
        var _this = this;
        var div = this.divs.first.nativeElement.children[this.elementRefs.find(function (el) { return el.el_id == _this.root; }).div_id];
        var x = this.getTranslate3DValues(this.root);
        var posX = (div.offsetLeft + x[0]) * 100 / (this.canvas_container.nativeElement.offsetWidth - 100);
        var posY = (div.offsetTop + x[1]) * 100 / (this.canvas_container.nativeElement.offsetHeight - 100);
        posX = posX > 100 ? 100 : posX < 0 ? 0 : posX;
        posY = posY > 100 ? 100 : posY < 0 ? 0 : posY;
        var out = [{
                id: this.root,
                name: this.elements.find(function (el) { return el.id == _this.root; }).name,
                parent: null,
                first: false,
                x: posX,
                y: posY
            }];
        var pivotes = [this.root];
        while (pivotes.length > 0) {
            var current = pivotes.shift();
            var _loop_5 = function (route) {
                if (current === route.end.el_id) {
                    div = this_4.divs.first.nativeElement.children[this_4.elementRefs.find(function (el) { return el.el_id == route.start.el_id; }).div_id];
                    x = this_4.getTranslate3DValues(route.start.el_id);
                    posX = (div.offsetLeft + x[0]) * 100 / (this_4.canvas_container.nativeElement.offsetWidth - 100);
                    posY = (div.offsetTop + x[1]) * 100 / (this_4.canvas_container.nativeElement.offsetHeight - 100);
                    posX = posX > 100 ? 100 : posX < 0 ? 0 : posX;
                    posY = posY > 100 ? 100 : posY < 0 ? 0 : posY;
                    out.push({
                        id: route.start.el_id,
                        name: this_4.elements.find(function (el) { return el.id == route.start.el_id; }).name,
                        parent: current,
                        first: false,
                        x: posX,
                        y: posY
                    });
                    pivotes.push(route.start.el_id);
                }
            };
            var this_4 = this;
            try {
                for (var _b = (e_10 = void 0, __values(this.routes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var route = _c.value;
                    _loop_5(route);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        out[out.length - 1].first = true;
        return out;
    };
    CreateComponent.prototype.goCreateRoute = function () {
        var _this = this;
        var elements;
        if (this.routes.length > 0) {
            elements = this.constructElementList();
        }
        else if (this.root) {
            var div = this.divs.first.nativeElement.children[this.elementRefs.find(function (el) { return el.el_id == _this.root; }).div_id];
            var x = this.getTranslate3DValues(this.root);
            elements = [{
                    id: this.root,
                    name: this.elements.find(function (el) { return el.id == _this.root; }).name,
                    parent: null,
                    first: true,
                    x: (div.offsetLeft + x[0]) * 100 / (this.canvas_container.nativeElement.offsetWidth - 100),
                    y: (div.offsetTop + x[1]) * 100 / (this.canvas_container.nativeElement.offsetHeight - 100)
                }];
            elements[0].x = elements[0].x > 100 ? 100 : elements[0].x < 0 ? 0 : elements[0].x;
            elements[0].y = elements[0].y > 100 ? 100 : elements[0].y < 0 ? 0 : elements[0].y;
        }
        else
            elements = null;
        if (elements) {
            var dialog = this.dialog.open(_create_route_dialog_create_route_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CreateRouteDialogComponent"], {
                width: '90vw',
                height: '90vh',
                maxWidth: '90vw',
                maxHeight: '90vh',
                data: {
                    elements: elements,
                    difficulties: this.difficulties,
                    materiality: this.materialities,
                    route: this.route || undefined,
                    image: this.route ? this.route.image_url ? this.route.image_url : undefined : undefined
                }
            });
            dialog.afterClosed().subscribe(function (res) {
                if (typeof res !== 'undefined') {
                    _this.fuseProgressBarService.show();
                    var body = {};
                    if (!_this.route) {
                        body = __assign({}, res.form, { score: parseInt(res.form.score), expire_at: res.form.expire_at ? moment__WEBPACK_IMPORTED_MODULE_12__(res.form.expire_at, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD') || undefined : undefined, tree: elements.map(function (el) { return ({ element: parseInt(el.id), parent: parseInt(el.parent) || undefined, x: el.x, y: el.y }); }) });
                        _this.routesService.postRoute(body).subscribe(function (_res) {
                            if (res.formdata) {
                                _this.routesService.uploadRouteImage(res.formdata, _res.id).subscribe(function (__res) {
                                    _this.snack.open(_res.message, 'INFO', {
                                        horizontalPosition: _this.xPos,
                                        verticalPosition: _this.yPos,
                                        duration: 5000,
                                        panelClass: 'green',
                                    });
                                    _this.fuseProgressBarService.hide();
                                    _this.router.navigate(['routes/consult']);
                                }, function (err) {
                                    console.log(err);
                                    _this.snack.open(err.error.message, 'ERROR', {
                                        horizontalPosition: _this.xPos,
                                        verticalPosition: _this.yPos,
                                        duration: 5000,
                                        panelClass: 'red',
                                    });
                                });
                            }
                            else {
                                _this.snack.open(_res.message, 'INFO', {
                                    horizontalPosition: _this.xPos,
                                    verticalPosition: _this.yPos,
                                    duration: 5000,
                                    panelClass: 'green',
                                });
                                _this.fuseProgressBarService.hide();
                                _this.router.navigate(['routes/consult']);
                            }
                        }, function (err) {
                            _this.snack.open(err.error.message, 'ERROR', {
                                horizontalPosition: _this.xPos,
                                verticalPosition: _this.yPos,
                                duration: 5000,
                                panelClass: 'red',
                            });
                        });
                    }
                    else {
                        body = __assign({}, res.form, { id: _this.route.id, image_url: _this.route.image_url ? _this.route.image_url : undefined, score: parseInt(res.form.score), expire_at: res.form.expire_at ? moment__WEBPACK_IMPORTED_MODULE_12__(res.form.expire_at, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD') || undefined : undefined, tree: elements.map(function (el) { return ({ element: parseInt(el.id), parent: parseInt(el.parent) || undefined, x: el.x, y: el.y }); }) });
                        _this.routesService.editRoute(body).subscribe(function (_res) {
                            if (res.formdata) {
                                _this.routesService.uploadRouteImage(res.formdata, _res.id).subscribe(function (__res) {
                                    _this.snack.open(_res.message, 'INFO', {
                                        horizontalPosition: _this.xPos,
                                        verticalPosition: _this.yPos,
                                        duration: 5000,
                                        panelClass: 'green',
                                    });
                                    _this.fuseProgressBarService.hide();
                                    _this.router.navigate(['routes/consult']);
                                }, function (err) {
                                    console.log(err);
                                    _this.snack.open(err.error.message, 'ERROR', {
                                        horizontalPosition: _this.xPos,
                                        verticalPosition: _this.yPos,
                                        duration: 5000,
                                        panelClass: 'red',
                                    });
                                });
                            }
                            else {
                                _this.snack.open(_res.message, 'INFO', {
                                    horizontalPosition: _this.xPos,
                                    verticalPosition: _this.yPos,
                                    duration: 5000,
                                    panelClass: 'green',
                                });
                                _this.fuseProgressBarService.hide();
                                _this.router.navigate(['routes/consult']);
                            }
                        }, function (err) {
                            _this.snack.open(err.error.message, 'ERROR', {
                                horizontalPosition: _this.xPos,
                                verticalPosition: _this.yPos,
                                duration: 5000,
                                panelClass: 'red',
                            });
                        });
                    }
                }
            });
        }
        else {
            this.snack.open(this.translateService.instant('ERROR.ROUTE_EMPTY'), 'ERROR', {
                horizontalPosition: this.xPos,
                verticalPosition: this.yPos,
                duration: 5000,
                panelClass: 'red',
            });
        }
    };
    CreateComponent.prototype.doesFit = function (string) {
        return string.length < 30;
    };
    CreateComponent.prototype.getElementEllipse = function (name) {
        return name.substring(0, 29).trim() + '...';
    };
    CreateComponent.prototype.getTranslate3DValues = function (elementId) {
        var div = this.divs.first.nativeElement.children[this.elementRefs.find(function (el) { return el.el_id == elementId; }).div_id];
        if (div.style.transform) {
            var start = div.style.transform.indexOf('(');
            var x = div.style.transform.substring(start + 1);
            x = x.substring(0, x.length - 1).split(',');
            return [parseInt(x[0].replace('px', '')), parseInt(x[1].replace('px', '')), parseInt(x[2].replace('px', ''))];
        }
        return [0, 0];
    };
    CreateComponent.prototype.isSelectable = function (id) {
        return this.elementList.find(function (el) { return el.id == id; }) ? true : false;
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        this.routesService.routeName = null;
    };
    CreateComponent.prototype.goViewRoutes = function () {
        var _this = this;
        var dialog = this.dialog.open(CancelDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined')
                _this.router.navigate(['routes/consult']);
        });
    };
    CreateComponent.prototype.getSize = function (id) {
        if (id == this.root)
            return { 'width': '200px' };
        else
            return null;
    };
    CreateComponent.prototype.getImageSize = function (id) {
        if (id == this.root)
            return { 'height': '200px', 'max-height': '200px', 'min-height': '200px' };
        else
            return null;
    };
    CreateComponent.prototype.getTerminalStyle = function (pos, id) {
        if (id == this.root) {
            switch (pos) {
                case 'top': return { 'top': '-17px', 'left': '91px' };
                case 'left': return { 'top': '91px', 'left': '-17px' };
                case 'bottom': return { 'top': '200px', 'left': '91px' };
                case 'right': return { 'top': '91px', 'left': '200px' };
            }
        }
        else {
            switch (pos) {
                case 'top': return { 'top': '-17px', 'left': '41px' };
                case 'left': return { 'top': '41px', 'left': '-17px' };
                case 'bottom': return { 'top': '100px', 'left': '41px' };
                case 'right': return { 'top': '41px', 'left': '100px' };
            }
        }
    };
    CreateComponent.prototype.constructDivs = function () {
        var e_11, _a;
        this.arrowElements = [];
        try {
            for (var _b = __values(this.routes.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], route = _d[1];
                var start = this.getPoints(route.start);
                var end = this.getPoints(route.end);
                var angle = this.getAngle(end[1] + this.size, end[0] + this.size, start[1] + this.size, start[0] + this.size);
                var points = this.getCoordinates(start[0], start[1], end[0], end[1], angle, route.end.el_id == this.root);
                switch (points[8]) {
                    case 0:
                        if (points[9]) {
                            this.arrowElements.push({
                                style: {
                                    'left': points[0] - 10 + 'px',
                                    'top': points[1] - 10 + 'px',
                                    'width': points[2] - points[0] + 20 + 'px',
                                    'height': "20px",
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                            this.arrowElements.push({
                                style: {
                                    'left': points[2] - 10 + 'px',
                                    'top': points[3] < points[5] ? points[3] - 10 + 'px' : points[5] - 10 + 'px',
                                    'width': "20px",
                                    'height': Math.abs(points[5] - points[3]) + 20 + 'px',
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        else {
                            this.arrowElements.push({
                                style: {
                                    'left': points[0] - 10 + 'px',
                                    'top': points[1] < points[3] ? points[1] - 10 + 'px' : points[3] - 10 + 'px',
                                    'width': "20px",
                                    'height': Math.abs(points[3] - points[1]) + 20 + 'px',
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        this.arrowElements.push({
                            style: {
                                'left': points[4] - 10 + 'px',
                                'top': points[5] - 10 + 'px',
                                'width': points[6] - points[4] + 20 + 'px',
                                'height': "20px",
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        break;
                    case 1:
                        this.arrowElements.push({
                            style: {
                                'left': points[0] - 10 + 'px',
                                'top': points[1] - 10 + 'px',
                                'width': "20px",
                                'height': points[3] - points[1] + 20 + 'px',
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        if (points[9]) {
                            this.arrowElements.push({
                                style: {
                                    'left': points[2] < points[4] ? points[2] - 10 + 'px' : points[4] - 10 + 'px',
                                    'top': points[3] - 10 + 'px',
                                    'width': Math.abs(points[4] - points[2]) + 20 + 'px',
                                    'height': "20px",
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        this.arrowElements.push({
                            style: {
                                'left': points[4] - 10 + 'px',
                                'top': points[5] - 10 + 'px',
                                'width': "20px",
                                'height': points[7] - points[5] + 20 + 'px',
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        break;
                    case 2:
                        if (points[9]) {
                            this.arrowElements.push({
                                style: {
                                    'left': points[2] - 10 + 'px',
                                    'top': points[3] - 10 + 'px',
                                    'width': points[0] - points[2] + 20 + 'px',
                                    'height': "20px",
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                            this.arrowElements.push({
                                style: {
                                    'left': points[2] - 10 + 'px',
                                    'top': points[3] < points[5] ? points[3] - 10 + 'px' : points[5] - 10 + 'px',
                                    'width': "20px",
                                    'height': Math.abs(points[5] - points[3]) + 20 + 'px',
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        else {
                            this.arrowElements.push({
                                style: {
                                    'left': points[0] - 10 + 'px',
                                    'top': points[1] < points[3] ? points[1] - 10 + 'px' : points[3] - 10 + 'px',
                                    'width': "20px",
                                    'height': Math.abs(points[3] - points[1]) + 20 + 'px',
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        this.arrowElements.push({
                            style: {
                                'left': points[6] - 10 + 'px',
                                'top': points[7] - 10 + 'px',
                                'width': points[4] - points[6] + 20 + 'px',
                                'height': "20px",
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        break;
                    case 3:
                        this.arrowElements.push({
                            style: {
                                'left': points[0] - 10 + 'px',
                                'top': points[3] - 10 + 'px',
                                'width': "20px",
                                'height': points[1] - points[3] + 20 + 'px',
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        if (points[9]) {
                            this.arrowElements.push({
                                style: {
                                    'left': points[2] < points[4] ? points[2] - 10 + 'px' : points[4] - 10 + 'px',
                                    'top': points[3] - 10 + 'px',
                                    'width': Math.abs(points[4] - points[2]) + 20 + 'px',
                                    'height': "20px",
                                    'background-color': "transparent",
                                    'position': 'absolute',
                                    'cursor': 'pointer'
                                },
                                id: route.start.el_id
                            });
                        }
                        this.arrowElements.push({
                            style: {
                                'left': points[6] - 10 + 'px',
                                'top': points[7] - 10 + 'px',
                                'width': "20px",
                                'height': points[5] - points[7] + 20 + 'px',
                                'background-color': "transparent",
                                'position': 'absolute',
                                'cursor': 'pointer'
                            },
                            id: route.start.el_id
                        });
                        break;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__["FuseTranslationLoaderService"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_11__["FuseProgressBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _routes_service__WEBPACK_IMPORTED_MODULE_3__["RoutesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown.escape', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CreateComponent.prototype, "onKeydownHandler", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mycanvas', { static: true }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvascontainer', { static: true }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "canvas_container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('root', { static: true }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "rootEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { static: true }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CreateComponent.prototype, "divs", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/create/create.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create.component.scss */ "./src/app/main/routes/create/create.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_6__["FuseTranslationLoaderService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_11__["FuseProgressBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _routes_service__WEBPACK_IMPORTED_MODULE_3__["RoutesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());

var CancelDialogComponent = /** @class */ (function () {
    function CancelDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    CancelDialogComponent.prototype.ngOnInit = function () { };
    CancelDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CancelDialogComponent.prototype.goViewRoutes = function () {
    };
    CancelDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CancelDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cancel-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!../cancel-dialog/cancel-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/cancel-dialog/cancel-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], CancelDialogComponent);
    return CancelDialogComponent;
}());

var ResetDialogComponent = /** @class */ (function () {
    function ResetDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    ResetDialogComponent.prototype.ngOnInit = function () { };
    ResetDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ResetDialogComponent.prototype.goViewRoutes = function () {
    };
    ResetDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ResetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reset-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!../reset-dialog/reset-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/reset-dialog/reset-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], ResetDialogComponent);
    return ResetDialogComponent;
}());

var RootDialogComponent = /** @class */ (function () {
    function RootDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    RootDialogComponent.prototype.ngOnInit = function () { };
    RootDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    RootDialogComponent.prototype.changeRoot = function () {
    };
    RootDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    RootDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-dialog',
            template: "<h1 mat-dialog-title>{{'ROOT_OP.TITLE' | translate}}</h1>\n  <div mat-dialog-content>\n      {{'ROOT_OP.MESSAGE' | translate}}\n  </div>\n  <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close color='warn' (click)=\"changeRoot();\">{{'ROOT_OP.YES' | translate}}</button>\n      <button mat-button (click) = 'cancel();'>{{'ROOT_OP.NO' | translate}}</button>\n  </mat-dialog-actions>\n    "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], RootDialogComponent);
    return RootDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/routes/detail/detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/routes/detail/detail.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".element-card {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vcm91dGVzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yb3V0ZXMvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGVtZW50LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/routes/detail/detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/routes/detail/detail.component.ts ***!
  \********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes.service */ "./src/app/main/routes/routes.service.ts");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n/es */ "./src/app/main/routes/i18n/es.ts");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/lib/index.js");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};











var DetailComponent = /** @class */ (function () {
    function DetailComponent(_fuseTranslationLoaderService, fuseProgressBarService, router, fuseConfigService, activatedRoute, service, networkService, changesDetector, translateService, snack) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.fuseProgressBarService = fuseProgressBarService;
        this.router = router;
        this.fuseConfigService = fuseConfigService;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.networkService = networkService;
        this.changesDetector = changesDetector;
        this.translateService = translateService;
        this.snack = snack;
        this.elements = [];
        this.elementRefs = [];
        this.levels = [];
        this.loading = true;
        this.drawed = false;
        this.size = 50;
        this.levelW = 0;
        this.xPos = 'center';
        this.yPos = 'top';
        this.loadedImages = 0;
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false
                },
                toolbar: {
                    hidden: false
                }
            }
        };
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_5__["locale"]);
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fuseProgressBarService.show();
        this.ctx = this.canvas.nativeElement.getContext("2d");
        this.w = 0;
        this.h = 0;
        this.activatedRoute.paramMap.subscribe(function (res) {
            _this.getRoute(res.params.routeId);
        });
    };
    DetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = this.divs.changes.subscribe(function (val) {
            _this.elementRefs = [];
            _this.w = _this.container.nativeElement.offsetWidth;
            _this.h = _this.container.nativeElement.offsetHeight;
            var interval = setInterval(function () {
                var e_1, _a;
                if (!_this.loading) {
                    clearInterval(interval);
                    try {
                        for (var _b = __values(val.first.nativeElement.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var el = _c.value;
                            if (el.id) {
                                _this.elementRefs.push({ div_id: el.id, el_id: parseInt(el.id.substring(el.id.indexOf('_') + 1)) });
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    _this.draw();
                }
                else
                    console.log('Loading...');
            }, 100);
        });
    };
    DetailComponent.prototype.ngAfterViewChecked = function () {
        if (this.drawed) {
            this.w = this.container.nativeElement.offsetWidth;
            this.h = this.container.nativeElement.offsetHeight;
            this.draw();
        }
        this.changesDetector.detectChanges();
    };
    DetailComponent.prototype.ngDoCheck = function () {
    };
    DetailComponent.prototype.getRoute = function (id) {
        var _this = this;
        this.route = [];
        this.service.getRoute(id).subscribe(function (res) {
            _this.route = res;
            _this.service.routeName = res.name;
            _this.getElementList();
        });
    };
    DetailComponent.prototype.getElementList = function () {
        var _this = this;
        this.elements = [];
        this.service.getElementList().subscribe(function (res) {
            var e_2, _a;
            _this.elements = res;
            _this.snack.open(_this.translateService.instant('ROUTE.LOADING_IMAGES'), 'INFO', {
                horizontalPosition: _this.xPos,
                verticalPosition: _this.yPos,
                duration: 99999,
                panelClass: 'blue',
            });
            _this.totalImages = _this.route.tree.length;
            var _loop_1 = function (el) {
                if (!_this.route.tree.find(function (element) { return element.element_id == el.id; }))
                    return "continue";
                el.image_url = null;
                _this.service.getElementImage(el.id).subscribe(function (res) {
                    var reader = new FileReader();
                    reader.readAsDataURL(res);
                    reader.onload = function (event) {
                        el.image_url = reader.result;
                        _this.loadedImages++;
                        if (_this.loadedImages == _this.totalImages)
                            _this.snack.dismiss();
                    };
                });
            };
            try {
                for (var _b = __values(_this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    _loop_1(el);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.loading = false;
        });
    };
    DetailComponent.prototype.draw = function () {
        var e_3, _a;
        this.drawed = true;
        this.ctx.clearRect(0, 0, 2000, 2000);
        this.ctx.beginPath();
        var root = -1;
        var _loop_2 = function (route) {
            if (route.parent_element_id == 0) {
                root = route.element_id;
                return "continue";
            }
            var start = this_1.getPoints(this_1.elementRefs.find(function (el) { return el.el_id == route.element_id; }));
            var end = this_1.getPoints(this_1.elementRefs.find(function (el) { return el.el_id == route.parent_element_id; }));
            var angle = this_1.getAngle(end[1] + this_1.size, end[0] + this_1.size, start[1] + this_1.size, start[0] + this_1.size);
            var points = this_1.getCoordinates(start[0], start[1], end[0], end[1], angle, route.parent_element_id == root);
            var arrowPoints = this_1.getArrowHead(points[6], points[7], points[8]);
            this_1.ctx.beginPath();
            this_1.ctx.lineWidth = 2;
            this_1.ctx.fillStyle = '#6a6a6a';
            this_1.ctx.strokeStyle = '#6a6a6a';
            this_1.ctx.moveTo(points[0], points[1]);
            this_1.ctx.lineTo(points[2], points[3]);
            this_1.ctx.lineTo(points[4], points[5]);
            this_1.ctx.lineTo(points[6], points[7]);
            this_1.ctx.stroke();
            this_1.ctx.beginPath();
            this_1.ctx.lineWidth = 2.5;
            this_1.ctx.moveTo(points[6], points[7]);
            this_1.ctx.lineTo(arrowPoints[0], arrowPoints[1]);
            this_1.ctx.moveTo(points[6], points[7]);
            this_1.ctx.lineTo(arrowPoints[2], arrowPoints[3]);
            this_1.ctx.stroke();
            this_1.fuseProgressBarService.hide();
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.route.tree), _c = _b.next(); !_c.done; _c = _b.next()) {
                var route = _c.value;
                _loop_2(route);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    DetailComponent.prototype.getPoints = function (element) {
        return [parseInt(this.divs.first.nativeElement.children[element.div_id].style.left.replace('px', '')),
            parseInt(this.divs.first.nativeElement.children[element.div_id].style.top.replace('px', ''))];
    };
    DetailComponent.prototype.getArrowHead = function (x1, y1, direction) {
        switch (direction) {
            case 0: return this.getArrowPoints(x1, y1, 0);
            case 1: return this.getArrowPoints(x1, y1, 270);
            case 2: return this.getArrowPoints(x1, y1, 180);
            case 3: return this.getArrowPoints(x1, y1, 90);
            default: return null;
        }
    };
    DetailComponent.prototype.getCoordinates = function (x1, y1, x2, y2, angle, root) {
        if (root) {
            if (Math.abs(x2 - x1) < this.size * 2.5 || Math.abs(y2 - y1) < this.size * 2.5) {
                if (angle > 315 || angle < 45) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y2 + this.size * 2,
                        x2,
                        y2 + this.size * 2,
                        0,
                        true
                    ];
                }
                else if (angle < 135) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        y2 + 2 * this.size * 2,
                        3,
                        true
                    ];
                }
                else if (angle < 225) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y1 + this.size,
                        (x1 + x2 + this.size * 2) / 2,
                        y2 + this.size * 2,
                        x2 + this.size * 2 * 2,
                        y2 + this.size * 2,
                        2,
                        true
                    ];
                }
                else {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        (y1 + y2 + this.size * 2) / 2,
                        x2 + this.size * 2,
                        y2,
                        1,
                        true
                    ];
                }
            }
            else {
                if (angle < 90 || angle > 270) {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x2,
                        y2 + this.size * 2,
                        0,
                        false
                    ];
                }
                else {
                    return [
                        x1 + this.size,
                        y1 + this.size,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x1 + this.size,
                        y2 + this.size * 2,
                        x2 + this.size * 2 * 2,
                        y2 + this.size * 2,
                        2,
                        false
                    ];
                }
            }
        }
        else {
            if (Math.abs(x2 - x1) < this.size * 2.5 || Math.abs(y2 - y1) < this.size * 2.5) {
                if (angle > 315 || angle < 45) {
                    return [x1 + this.size, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y2 + this.size, x2, y2 + this.size, 0, true];
                }
                else if (angle < 135) {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, y2 + 2 * this.size, 3, true];
                }
                else if (angle < 225) {
                    return [x1 + this.size, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y1 + this.size, (x1 + x2 + this.size * 2) / 2, y2 + this.size, x2 + this.size * 2, y2 + this.size, 2, true];
                }
                else {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, (y1 + y2 + this.size * 2) / 2, x2 + this.size, y2, 1, true];
                }
            }
            else {
                if (angle < 90 || angle > 270) {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, y2 + this.size, x1 + this.size, y2 + this.size, x2, y2 + this.size, 0, false];
                }
                else {
                    return [x1 + this.size, y1 + this.size, x1 + this.size, y2 + this.size, x1 + this.size, y2 + this.size, x2 + this.size * 2, y2 + this.size, 2, false];
                }
            }
        }
    };
    DetailComponent.prototype.getArrowPoints = function (x1, y1, angle) {
        var size = 13;
        var radians0 = angle * (Math.PI / 180);
        var radians1 = (angle * (Math.PI / 180)) + Math.PI + Math.PI / 6;
        var radians2 = (angle * (Math.PI / 180)) + Math.PI - Math.PI / 6;
        var offset = (angle > 0 && angle < 90) || angle > 270 ? -2 * Math.asin(Math.sin(radians0)) : 2 * Math.asin(Math.sin(radians0));
        return [x1 + (size * Math.cos(radians1 + offset)), y1 + (size * Math.sin(radians1 + offset)),
            x1 + (size * Math.cos(radians2 + offset)), y1 + (size * Math.sin(radians2 + offset))];
    };
    DetailComponent.prototype.getAngle = function (currX, currY, endX, endY) {
        var angle = Math.atan2(currX - endX, currY - endY) * (180 / Math.PI);
        if (angle < 0) {
            angle = Math.abs(angle);
        }
        else {
            angle = 360 - angle;
        }
        return angle;
    };
    ;
    DetailComponent.prototype.getDivPosition = function (element) {
        if (element.parent_element_id == 0) {
            return {
                'position': 'absolute',
                'top': element.y * (this.h - 160) / 100 + 10 + 'px',
                'left': element.x * (this.w - 170) / 100 + 20 + 'px',
                'height': '200px',
                'max-height': '200px',
                'min-height': '200px',
                'width': '200px',
                'max-width': '200px',
                'min-width': '200px'
            };
        }
        else {
            return {
                'position': 'absolute',
                'top': element.y * (this.h - 160) / 100 + 10 + 'px',
                'left': element.x * (this.w - 170) / 100 + 20 + 'px',
            };
        }
    };
    DetailComponent.prototype.getHeight = function (element) {
        if (element.parent_element_id == 0) {
            return {
                'max-height': '200px',
                'min-height': '200px',
                'height': '200px'
            };
        }
        else {
            return {
                'max-height': '100px',
                'min-height': '100px',
                'height': '100px'
            };
        }
    };
    DetailComponent.prototype.getElementImage = function (id) {
        if (this.elements.length === 0) {
            return '';
        }
        return this.elements.find(function (el) { return el.id == id; }).image_url;
    };
    DetailComponent.prototype.getElementName = function (id) {
        if (this.elements.length === 0) {
            return '';
        }
        return this.elements.find(function (el) { return el.id == id; }).name;
    };
    DetailComponent.prototype.export = function () {
        var _this = this;
        this.snack.open(this.translateService.instant('ROUTE.EXPORTING'), 'INFO', {
            horizontalPosition: this.xPos,
            verticalPosition: this.yPos,
            duration: 99999,
            panelClass: 'blue',
        });
        html_to_image__WEBPACK_IMPORTED_MODULE_6___default.a.toPng(this.container.nativeElement, { backgroundColor: '#eee' }).then(function (dataUrl) {
            _this.div.nativeElement.style.display = 'block';
            var img = new Image();
            img.src = dataUrl;
            img.onload = function (e) {
                var logo = new Image();
                logo.src = 'assets/images/Acreditta_LogoHorizontal.png';
                var c = document.createElement('canvas');
                logo.onload = function (e) {
                    var w = img.width;
                    var h = img.height;
                    var ratio = logo.width / logo.height;
                    var wLogo = w * 0.15;
                    var hLogo = wLogo / ratio;
                    c.height = h;
                    c.width = w + wLogo + 40;
                    var ctx = c.getContext('2d');
                    ctx.fillStyle = '#eee';
                    ctx.fillRect(0, 0, w + wLogo + 40, h);
                    ctx.drawImage(img, 0, 0);
                    ctx.drawImage(logo, w + 20, h - hLogo - 20, wLogo, hLogo);
                    var a = document.createElement('a');
                    a.href = c.toDataURL("image/png");
                    a.download = _this.route.name + "-route.png";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    _this.snack.open(_this.translateService.instant('ROUTE.EXPORTED'), 'INFO', {
                        horizontalPosition: _this.xPos,
                        verticalPosition: _this.yPos,
                        duration: 5000,
                        panelClass: 'green',
                    });
                };
            };
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.service.routeName = null;
        this.snack.dismiss();
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["FuseTranslationLoaderService"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__["FuseProgressBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _routes_service__WEBPACK_IMPORTED_MODULE_3__["RoutesService"] },
        { type: app_services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DetailComponent.prototype, "divs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { static: true }),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mydiv', { static: true }),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "div", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mycanvas', { static: true }),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "canvas", void 0);
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/detail/detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail.component.scss */ "./src/app/main/routes/detail/detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["FuseTranslationLoaderService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__["FuseProgressBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _routes_service__WEBPACK_IMPORTED_MODULE_3__["RoutesService"],
            app_services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/main/routes/i18n/es.ts":
/*!****************************************!*\
  !*** ./src/app/main/routes/i18n/es.ts ***!
  \****************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var locale = {
    lang: 'es',
    data: {
        'CREATE': {
            "SEARCH": "Buscar",
            "ADD_ROUTE": "Añadir Ruta",
            "DELETE_ROUTE": "Borrar Elemento",
            "DELETE_LINK": "Eliminar conexión",
            "ENTER_DATA": "Ingrese los datos para la formación de la ruta",
            "NAME": "Nombre de la Ruta",
            "GROUP": "Grupo",
            "DESCRIPTION": "Descripcion",
            "DURATION": "Duración",
            "SEQUENCE": "Secuencia",
            "REQUIRED": "Obligatorio",
            "START": "Inicio",
            "FINISH": "Culminación",
            "SAVE": "Guardar",
            "SAVE_ROUTE": "Guardar Ruta",
            "CANCEL": "Cancelar",
            "BACK": "Volver",
            "EXPORT": "Exportar",
            "TAGS": "Etiquetas",
            "CRITERION": "Criterio",
            "EXPIRE_AT": "Fecha de Expiración",
            "LANGUAGE": "Idioma",
            "SKILLS": "Habilidades",
            "DIFFICULTY": "Dificultad",
            "SCORE": "Puntuación",
            "MATERIALITY": "Materialidad",
            "ROOT_ELEMENT": "Meta de la ruta",
            "NO_ROOT": "No hay ningún elemento en el campo",
            "NEW_ROUTE": "Nueva Ruta",
            "EDITING": "Editando",
            "VIEWING": "Viendo",
            "RESTART": "Reiniciar",
            "NO_ELEMENTS": "Todavía no hay elementos creados. Empieza a crearlos entrando al menú Crear Elementos.",
            "SET_AS_GOAL": "Establecer como elemento meta"
        }, 'ERROR': {
            "REQUIRED": "Este campo es requerido",
            "MAX_LENGTH_140": "El campo no debe exceder los 140 caracteres",
            "MIN_LENGTH_5": "El campo debe ser igual o mayor a 5 caracteres",
            "NUMERIC": "Este campo debe ser numérico y mayor a 0",
            "ROUTE_SELF": "No es posible conectar un elemento consigo mismo",
            "PARENT_ROUTE": "No es posible dirigir una ruta desde la meta",
            "PARENTS": "Cada elemento puede tener solo un elemento padre",
            "ROUTE_REPEAT": "Entre dos elementos solo puede existir una única conexión",
            "ROUTE_EMPTY": "No es posible registrar una ruta vacía",
            "WARN_DISCONNECTED_ELEMENTS": "ATENCIÓN: Todos los elementos que no estén conectados al elemento padre directa o indirectamente serán omitidos.",
            "IMAGE_TYPE_ERROR": "El tipo de archivo debe ser PNG",
            "MAX_FILE_SIZE": "El tamaño de la imagen no puede exceder los 2MB"
        }, 'DELETE_OP': {
            'TITLE': '¿Está seguro que desea eliminar esta ruta?',
            'MESSAGE': 'Esta acción no podrá deshacerse',
            'YES': 'Sí',
            'NO': 'No'
        }, 'CANCEL_OP': {
            'YES': "Sí",
            'NO': 'No',
            'TITLE': '¿Está seguro que desea salir?',
            'MESSAGE': 'Se perderán los cambios no guardados'
        }, 'RESET_OP': {
            'YES': "Sí",
            'NO': 'No',
            'TITLE': '¿Está seguro que desea reiniciar la creación de la ruta?',
            'MESSAGE': 'Se perderán todos los cambios realizados'
        }, 'ROOT_OP': {
            'YES': "Sí",
            'NO': 'No',
            'TITLE': '¿Está seguro de cambiar el elemento meta?',
            'MESSAGE': 'Los conectores que se originen del nuevo elemento meta se eliminarán.'
        }, 'ROUTE': {
            "VIEW": "Ver",
            "EDIT": "Editar",
            "DELETE": "Eliminar",
            "NO_ROUTES": "Todavía no hay rutas creadas. Empieza a crearlas entrando al menú Crear Rutas.",
            "LOADING_IMAGES": "Cargando Imágenes",
            "EXPORTING": "Exportando Ruta...",
            "EXPORTED": "La ruta ha sido exportada"
        }, "DIFFICULTY": {
            "EASY": "Fácil",
            "MEDIUM": "Intermedio",
            "HARD": "Difícil"
        }, "MATERIALITY": {
            "KNOWLEDGE": "Conocimiento",
            "SKILL": "Competencia",
            "EXCELLENCE": "Excelencia",
            "CERTIFICATION": "Certificación",
            "EXPERTISE": "Experticia",
            "MEMBERSHIP": "Membresía",
            "PARTICIPATION": "Participación"
        }, "LANGUAGES": {
            "es": "Español",
            "en": "Inglés",
            "pt": "Portugués",
            "fr": "Francés",
            "other": "Otro"
        },
    }
};


/***/ }),

/***/ "./src/app/main/routes/route/route.component.scss":
/*!********************************************************!*\
  !*** ./src/app/main/routes/route/route.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 1.2em;\n  max-height: 3.6em;\n  font-size: 0.95em; }\n\n.button-div {\n  width: 33%;\n  height: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.button-div:hover {\n  background-color: #cacaca; }\n\n.left {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.right {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vcm91dGVzL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksNEJBQTRCO0VBQzVCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yb3V0ZXMvcm91dGUvcm91dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhbC10ZXh0IHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMuNmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5idXR0b24tZGl2IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tZGl2OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/routes/route/route.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main/routes/route/route.component.ts ***!
  \******************************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.service */ "./src/app/main/routes/routes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RouteComponent = /** @class */ (function () {
    function RouteComponent(service) {
        this.service = service;
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultImg = 'assets/images/placeholder.png';
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.image_url) {
            if (this.route.image_url.includes('http')) {
                this.url = this.route.image_url;
                this.img = true;
            }
            else {
                this.service.getRouteImage(this.route.id).subscribe(function (res) {
                    var reader = new FileReader();
                    reader.readAsDataURL(res);
                    reader.onload = function (event) {
                        _this.url = reader.result;
                        _this.img = true;
                    };
                });
            }
        }
        else {
            this.url = this.defaultImg;
            this.img = false;
        }
    };
    RouteComponent.prototype.getEllipsis = function (str) {
        if (str.length < 120)
            return str;
        return str.substring(0, 120).trim() + '...';
    };
    RouteComponent.prototype.getTimestamp = function () {
        if (!this.date)
            this.date = Date.now();
        return this.date;
    };
    RouteComponent.ctorParameters = function () { return [
        { type: _routes_service__WEBPACK_IMPORTED_MODULE_1__["RoutesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('route'),
        __metadata("design:type", Object)
    ], RouteComponent.prototype, "route", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RouteComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RouteComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RouteComponent.prototype, "delete", void 0);
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'route',
            template: __importDefault(__webpack_require__(/*! raw-loader!./route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/route/route.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./route.component.scss */ "./src/app/main/routes/route/route.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_routes_service__WEBPACK_IMPORTED_MODULE_1__["RoutesService"]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/main/routes/routes.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/routes/routes.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcm91dGVzL3JvdXRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main/routes/routes.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/routes/routes.component.ts ***!
  \*************************************************/
/*! exports provided: RoutesComponent, DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesComponent", function() { return RoutesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/routes/i18n/es.ts");
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes.service */ "./src/app/main/routes/routes.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(_fuseTranslationLoaderService, router, fuseConfigService, routeService, dialog, fuseProgressBarService, snackbar) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.router = router;
        this.fuseConfigService = fuseConfigService;
        this.routeService = routeService;
        this.dialog = dialog;
        this.fuseProgressBarService = fuseProgressBarService;
        this.snackbar = snackbar;
        this.loading = true;
        this.routes = [];
        this.horizontalPos = 'center';
        this.verticalPos = 'top';
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false
                },
                toolbar: {
                    hidden: false
                }
            }
        };
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
    }
    RoutesComponent.prototype.ngOnInit = function () {
        this.fuseProgressBarService.show();
        this.getRoutes();
    };
    RoutesComponent.prototype.getRoutes = function () {
        var _this = this;
        this.routeService.getRoutesList().subscribe(function (res) {
            _this.routes = res;
            _this.loading = false;
            _this.fuseProgressBarService.hide();
        });
    };
    RoutesComponent.prototype.deleteRoute = function (id) {
        var _this = this;
        var dialog = this.dialog.open(DeleteDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined') {
                _this.fuseProgressBarService.show();
                _this.routeService.deleteRoute(id).subscribe(function (res) {
                    if (res.status == 500) {
                        _this.snackbar.open(res.message, 'ERROR', {
                            horizontalPosition: _this.horizontalPos,
                            verticalPosition: _this.verticalPos,
                            duration: 5000,
                            panelClass: 'red'
                        });
                    }
                    else {
                        _this.snackbar.open(res.message, 'INFO', {
                            horizontalPosition: _this.horizontalPos,
                            verticalPosition: _this.verticalPos,
                            duration: 5000,
                            panelClass: 'green'
                        });
                    }
                    _this.getRoutes();
                }, function (err) {
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'red'
                    });
                    _this.fuseProgressBarService.hide();
                });
            }
        });
    };
    RoutesComponent.prototype.viewRoute = function (id) {
        this.router.navigate(['routes/consult/' + id]);
    };
    RoutesComponent.prototype.editRoute = function (id) {
        this.router.navigate(['routes/edit/' + id]);
    };
    RoutesComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["FuseTranslationLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _routes_service__WEBPACK_IMPORTED_MODULE_5__["RoutesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_7__["FuseProgressBarService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
    ]; };
    RoutesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'routes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./routes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/routes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./routes.component.scss */ "./src/app/main/routes/routes.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["FuseTranslationLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _routes_service__WEBPACK_IMPORTED_MODULE_5__["RoutesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_7__["FuseProgressBarService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], RoutesComponent);
    return RoutesComponent;
}());

var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.delete = function () {
    };
    DeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./delete-dialog/delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/routes/delete-dialog/delete-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/routes/routes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/routes/routes.module.ts ***!
  \**********************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _routes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes.component */ "./src/app/main/routes/routes.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create/create.component */ "./src/app/main/routes/create/create.component.ts");
/* harmony import */ var _create_create_route_dialog_create_route_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create/create-route-dialog/create-route-dialog.component */ "./src/app/main/routes/create/create-route-dialog/create-route-dialog.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./route/route.component */ "./src/app/main/routes/route/route.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/main/routes/detail/detail.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var routes = [
    {
        path: 'consult',
        component: _routes_component__WEBPACK_IMPORTED_MODULE_14__["RoutesComponent"]
    },
    {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"]
    }, {
        path: 'consult/:routeId',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_19__["DetailComponent"]
    }, {
        path: 'edit/:routeId',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"]
    }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _routes_component__WEBPACK_IMPORTED_MODULE_14__["RoutesComponent"],
                _route_route_component__WEBPACK_IMPORTED_MODULE_18__["RouteComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"],
                _create_create_route_dialog_create_route_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateRouteDialogComponent"],
                _routes_component__WEBPACK_IMPORTED_MODULE_14__["DeleteDialogComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CancelDialogComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["ResetDialogComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["RootDialogComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_19__["DetailComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"]
            ],
            exports: [
                _routes_component__WEBPACK_IMPORTED_MODULE_14__["RoutesComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_19__["DetailComponent"]
            ],
            entryComponents: [_create_create_route_dialog_create_route_dialog_component__WEBPACK_IMPORTED_MODULE_16__["CreateRouteDialogComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_15__["RootDialogComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CancelDialogComponent"], _routes_component__WEBPACK_IMPORTED_MODULE_14__["DeleteDialogComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_15__["ResetDialogComponent"]]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-routes-routes-module.js.map