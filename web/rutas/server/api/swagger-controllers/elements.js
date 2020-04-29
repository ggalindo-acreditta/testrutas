'use strict';

module.exports = {
  list: require('../controllers/elements/list'),
  get: require('../controllers/elements/get'),
  add: require('../controllers/elements/add'),
  update: require('../controllers/elements/update'),
  delete: require('../controllers/elements/delete'),
  postImage: require('../controllers/elements/add-image'),
  getImage: require('../controllers/elements/get-image'),
  deleteImage: require('../controllers/elements/delete-image')
};
