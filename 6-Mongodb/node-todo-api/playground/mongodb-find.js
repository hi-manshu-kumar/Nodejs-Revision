 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");
    
    db.collection('todos').find({completed: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

    db.collection('todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    },(err) => {
        console.log('Unable to fetch todos', err);
    });


    db.collection('Users').find({
        name: "Himanshu"
    }).count().then((count) =>{
        console.log(`count is ${count}`);
    },(err) => {
        console.log("error is", err);
    });
    // db.close();
 });