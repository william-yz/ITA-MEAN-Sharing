'use strict';

/**
 * Module dependencies
 */
var postionController = require('../controllers/position.controller');

module.exports = function (app) {
  app.route('/position')
     .get(postionController.index);

  app.route('/position/detail/:_id')
      .get(postionController.detail);
  app.route('/position/apply/:_id')
      .get(postionController.applyPosition)
      .post(postionController.apply);
};
