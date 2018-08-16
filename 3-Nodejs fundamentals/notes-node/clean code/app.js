const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);

var argv = yargs.argv;
// var command = process.argv[2]; in yargs we do
var command = argv._[0];

console.log('Commmand',command);
// process.argv is the array of all the arguments
console.log('yargs',argv);

if (command === "add") {
    var note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log("Note created");
        notes.logNote(note);
    }else{
        console.log("Note title taken");
    }
} else if ( command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}  else if ( command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}  else if ( command === 'read'){
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Note found');
        notes.logNote(note);
    }else {
        console.log('Note not found');
    }
} else {
    console.log('command not recognized');
}  

