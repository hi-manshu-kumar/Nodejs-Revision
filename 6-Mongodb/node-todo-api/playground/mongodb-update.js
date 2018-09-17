const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b9dea4e03b87a1f8418ada2')
    },{
        $set: {
            completed: false
        }
    },{
        returnOriginal: false
    }).then((result)=> {
        console.log(result);
    });
    // db.close();
});