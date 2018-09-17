const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, docs) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongodb server');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
        console.log(result);
    })
    //deleteOne
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
        console.log(result);
    })
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
        console.log(result);
    })
});