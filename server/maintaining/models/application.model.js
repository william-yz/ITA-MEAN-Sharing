'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ApplicationSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  college: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  position: {
    type: Schema.ObjectId,
    ref: 'Position'
  }
});

mongoose.model('Application', ApplicationSchema);
