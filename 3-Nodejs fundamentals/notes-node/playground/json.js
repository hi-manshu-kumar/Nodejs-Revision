// var obj = {
//     name: 'himank'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Himank", "age": 21}';

// var person = JSON.parse(personString);
// console.log(person,typeof person);

const fs = require('fs');

var originalNote = {
    title : "Some title",
    body : "some body"
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note, note.title);