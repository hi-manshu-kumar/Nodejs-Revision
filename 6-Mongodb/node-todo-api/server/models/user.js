var mongoose = require('mongoose');
// User -----------excercise-----------------
// Email - require it - trim it - set type - set min length of 1

var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var user = new User({
//     email: "hiams"
// });

// user.save().then( (res) => {}, (err) => {});

module.exports = {User}