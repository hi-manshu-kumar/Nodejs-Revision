const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');

var id = '5bc6478966d70b182e9cf28e';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
    // text : "Second test todo"
}).then((data) => {
    console.log('todos', data);
});

Todo.findOne({
    _id: id
}).then((data) => {
    console.log('todo', data)
});

Todo.findById(id).then((data) => {
    if(!data){
        console.log('id not found');
    }
    console.log('todo by id', data);
}).catch((err) => {
    console.log('error in id', err)
});

User.findById(id).then( (data) => {
    if(!data){
        console.log("no id found");
    }
    console.log("data is.",data);
}).catch((err) => {
    console.log(err);
})