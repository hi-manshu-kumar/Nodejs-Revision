console.log('Starting app.');
// load builtin module using require
// fs module is gonna use so headover to nodejs.org/api/documentation
// we use fs.appendfile (file,data[,options],callback)
// file to be changed and data to be appended

const fs = require('fs');
// we are not going to change these so ne no need to make it var

// now we have all the acess of fs module so that we can use all the function of it 

//--------- fs.appendFile('greetings.txt','Hello world!');

/* in v7 we get a warning to remove it we have 2 options

fs.appendFile('asdl.txt','Hello world',fucniton (data,err) {
    if (data) {
        console.log('suceessful');
    }
    if(err) {
        console.log('unable to wriite to file');
    }
});

fs.appendFileSync('khsfdl.txt','hello worls');
As the funciton is asynch we need to have a callback funciton or make it synch fucnition and make it blocking I/o*/

// OS module - userinfo -> with this we can check we user has logged inside the os and return gretings with name.
const os = require ('os');
const notes = require('./notes.js');

var res = notes.add(4,6);
console.log(res);
// var user = os.userInfo();

// console.log(user);
// fs.appendFile('greetings.txt','hello ' + user.username + '!'); 

 //we can do this with es6 feature template string

// fs.appendFile('greetings.txt', `hello ${user.username} ! you are ${notes.age}`) ;
