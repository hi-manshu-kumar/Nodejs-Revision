 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    },(err) => {
        console.log('Unable to fetch todos', err);
    });


    db.collection('Users').find({name: 'Andrew'}).toArray().then((count) => {
        console.log(count);
    });
    // db.close();
 });