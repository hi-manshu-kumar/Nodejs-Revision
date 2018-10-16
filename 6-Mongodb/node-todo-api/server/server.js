const express = require('express');
const bodyparser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {user} = require('./models/user'); 

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((data) => {
        res.status(200).send(data)
    }, (err) => {
        res.status(400).send(err)
    })
});

// get -> /todos/ -> for all the todos or
//        /todos/123 -> for any specific todos by id

app.listen( 3000, ()=> {
    console.log('server running on 3000....');
});

module.exports = {app};