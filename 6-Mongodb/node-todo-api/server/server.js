const express = require('express');
const bodyparser = require('body-parser');
const {ObjectID} = require('mongoDB');

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
        res.status(200).send(data);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

// get -> /todos/ -> for all the todos or
//        /todos/123 -> for any specific todos by id

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    if(!ObjectID.isValid(id)){
        return res.status(404).send("id not valid")
    }

    Todo.findById(id).then( (data) => {
        if(!data){
            res.status(400).send("no id found");
        }
        res.send({data});
    }).catch((e) => {
        res.status(400).send();
    });
})

app.listen( 3000, ()=> {
    console.log('server running on 3000....');
});

module.exports = {app};