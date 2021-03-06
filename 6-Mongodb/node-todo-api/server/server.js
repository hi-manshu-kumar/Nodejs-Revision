require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyparser = require('body-parser');
const {ObjectID} = require('mongoDB');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user'); 
const {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyparser.json());

app.post('/todos', authenticate, (req,res) => {
    var todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });
    todo.save().then((data) => {
        res.status(200).send(data);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', authenticate, (req, res) => {
    Todo.find({
        _creator: req.user.id
    }).then((todos) => {
        res.status(200).send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

// get -> /todos/ -> for all the todos or
//        /todos/123 -> for any specific todos by id

app.get('/todos/:id', authenticate,(req, res) => {
    var id = req.params.id;
    console.log(id);
    if(!ObjectID.isValid(id)){
        return res.status(404).send("id not valid")
    }

    Todo.findOne({
        _id: id,
        _creator: req.user._id
    }).then( (data) => {
        if(!data){
            res.status(400).send("no id found");
        }
        res.status(200).send({data});
    }).catch((e) => {
        res.status(400).send();
    });
})

app.delete('/todos/:id', authenticate, (req,res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send("send valid id");
    }

    Todo.findOneAndRemove({
        _id: id,
        _creator: req.user._id
    }).then((result) => {
        if(!result){
            return res.status(404).send("no todo found");
        }
        res.send({result});
    }).catch((e) => {
        res.status(400).send("err in connecting", e);
    })
});

app.patch('/todos/:id', authenticate, (req, res) => {
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

    Todo.findOneAndUpdate( {_id : id, _creator: req.user._id}, {$set: body}, {new: true}).then((data) =>{
        if(!data){
            return res.status(404).send();
        }

        res.send({data});
    }).catch((e) => {
        res.status(400).send();
    })
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
  
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

//GET /users/me
app.get('/users/me', authenticate, (req,res) => {
    res.send(req.user);       
});

//POST /users/login {email, password}
app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch( (e) => {
        res.status(400).send();
    });
})

app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });  
});

app.listen(port, ()=> {
    console.log(`server running on ${port}....`);
});

module.exports = {app};