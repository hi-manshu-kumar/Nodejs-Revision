// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if(err){
    //         return console.log("unable to insert todo");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
        name: 'Himanshu',
        age: 19,
        location: 'mumbai'
    },(err, result) => {
        if (err) {
            return console.log("unable to add the user");
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined, 2))
    });

    db.close();
});

 