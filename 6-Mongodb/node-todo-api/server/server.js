var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{ 
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

var otherTodo = new Todo({
    text: 'do something',
    completed: false,
    completedAt : 123 
})

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log("unable to save todo")
});