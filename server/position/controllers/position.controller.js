'use strict';

var request = require('superagent');

module.exports.index = function (req, res) {
  request.get(req.app.locals.backendUrl + '/api/v1/position')
         .then(result => {
           res.render('./position/view/index', {
             data : result.body
           });
         });
}

module.exports.detail = function (req, res) {
  request.get(req.app.locals.backendUrl + '/api/v1/position/' + req.params._id)
         .then(result => {
           console.log(result.body);
           res.render('./position/view/detail', {
             data : result.body
           });
         });
}

module.exports.applyPosition = function (req, res) {
  request.get(req.app.locals.backendUrl + '/api/v1/position/' + req.params._id)
         .then(result => {
           console.log(result.body);
           res.render('./position/view/apply', {
             data : result.body
           });
         });
}

module.exports.apply = function (req, res) {
  req.body.position = req.params._id;
  request.post(req.app.locals.backendUrl + '/api/v1/application')
         .send(req.body)
         .then(() => {
           res.render('./position/view/success');
         });
}
