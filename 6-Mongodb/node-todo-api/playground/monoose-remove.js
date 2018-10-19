const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');

Todo.remove({}).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

Todo.findByIdAndRemove({_id: '5bc6ac89b911300640a78255'}).then((res) =>{
    console.log(res)
}, (err) =>{
    console.log(err)
});

Todo.findOneAndRemove({_id: "5bc804021ef9584c0b27436e"}).then((res) => {
    console.log(res)
});
