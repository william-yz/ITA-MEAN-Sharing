/**
 * Created by HUGO on 5/16/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeekerSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    school: {
      type: String
    },
    phone: {
        type: Number,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Seeker', SeekerSchema);

