const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID('5b9fe21ee83691b83bf5bf52')
    // },{
    //     $set: {
    //         completed: false
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=> {
    //     console.log(result);
    // });

    // db.collection("Users").findOneAndUpdate({
    //     _id: new ObjectID('5bc575d8c7c580328c943733')
    // }, {
    //     $set: {
    //         name: "jackie"
    //     },
    //     $inc: {
    //         age : 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => JSON.stringify(res, undefined, 2), (err) => console.log("error is", err))
    // db.close();

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bc575d8c7c580328c943733')
    },{
        $set: {
            name: "jackie"
        },
        $inc: {
            age : 1
        }
    },{
        returnOriginal: false
    }).then((result)=> {
        console.log(result);
    });
});