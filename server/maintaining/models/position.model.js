'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var PositionSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  salary: {
    type: Number
  }
});

mongoose.model('Position', PositionSchema);
