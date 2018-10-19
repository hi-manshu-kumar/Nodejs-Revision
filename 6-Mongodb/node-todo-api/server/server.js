require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyparser = require('body-parser');
const {ObjectID} = require('mongoDB');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {user} = require('./models/user'); 

var app = express();
const port = process.env.PORT;

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
        res.status(200).send({data});
    }).catch((e) => {
        res.status(400).send();
    });
})

app.post('/todos/:id', (req,res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send("send valid id");
    }
    Todo.findOneAndRemove({_id: id}).then((result) => {
        if(!result){
            return res.status(404).send("no todo found");
        }
        res.send({result});
    }).catch((e) => {
        res.status(400).send("err in connecting", e);
    })
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send("send valid id");
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    } 

    Todo.findByIdAndUpdate( {_id : id}, {$set: body}, {new: true}).then((data) =>{
        if(!data){
            return res.status(404).send();
        }

        res.send({data});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(port, ()=> {
    console.log(`server running on ${port}....`);
});

module.exports = {app};