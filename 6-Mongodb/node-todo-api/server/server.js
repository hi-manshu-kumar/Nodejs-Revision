var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{ // model is the method that we use to create new model , it takwes 2 argument,
    //1st one contaitns the string and 2nd one is the object which will define the various properties of the model
    text: {
        type:String
    },
    completed: {
        type: Boolean
    },
    completedat: {
        type: Number
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


var newToDo2 = new Todo({
    text: "cook lunch",
    completed: "false",
    completedat: 123
});

newToDo2.save().then((res) => {
    console.log("new todo added", res);
}, (err) => console.log("error is", err));