/**
 * Created by HUGO on 5/16/2016.
 */

/**
 * Created by HUGO on 5/16/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StaffSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    subject: {
        type: Number,
        default: 0
    },
    money: {
      type: String,
      default: '20K'
    },
    description: {
        type: String,
        default: ''
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Staff', StaffSchema);
