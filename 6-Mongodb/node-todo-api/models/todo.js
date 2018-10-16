var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{ // model is the method that we use to create new model , it takwes 2 argument,
    //1st one contaitns the string and 2nd one is the object which will define the various properties of the model
    text: {
        type:String,
        required: true,
        minlength: 1, // someone will provide test:"", which will be working for required:true buyt by tellling the length of the text 1 we will be more authenticated
        trim: true, //removes trailing white spaces present in fornt and back of the string eg text:"              " ------------ it will still fail
    },
    completed: {
        type: Boolean,
        default: false 
    },
    completedat: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log("unable to save todo")
// });
//------------------------------------------
// var otherTodo = new Todo({
//     text: 'do something',
//     completed: false,
//     completedAt : 123 
// })

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log("unable to save todo")
// });

//------------------------------------------
// var newToDo2 = new Todo({
//     text: "cook lunch",
//     completed: "false",
//     completedat: 123
// });

// newToDo2.save().then((res) => {
//     console.log("new todo added", res);
// }, (err) => console.log("error is", err));

module.exports = {Todo}