'use strict';

var request = require('superagent');
var mongoose = require('mongoose');
var Position = mongoose.model('Position');
var Application = mongoose.model('Application');
module.exports.index = function (req, res) {
  Position.find({})
         .then(result => {
           res.render('./public/modules/position/views/index', {
             data : result
           });
         });
}

module.exports.detail = function (req, res) {
  console.log(req.params._id);
  Position.findOne({_id : req.params._id})
         .then(result => {
           console.log(result);
           res.render('./public/modules/position/views/detail', {
             data : result
           });
         });
}

module.exports.applyPosition = function (req, res) {
  Position.findOne({_id : req.params._id})
         .then(result => {
           res.render('./public/modules/position/views/apply', {
             data : result
           });
         });
}

module.exports.apply = function (req, res) {
  req.body.position = req.params._id;
  Application.update({_id : req.params._id}, req.body)
         .then(() => {
           res.render('./public/modules/position/views/success');
         });
}
