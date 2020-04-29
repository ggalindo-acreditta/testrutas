'use strict';

module.exports = {
  list: require('../controllers/paths/list'),
  get: require('../controllers/paths/get'),
  add: require('../controllers/paths/add'),
  update: require('../controllers/paths/update'),
  delete: require('../controllers/paths/delete'),
  postImage: require('../controllers/paths/add-image'),
  getImage: require('../controllers/paths/get-image'),
  deleteImage: require('../controllers/paths/delete-image')
};
