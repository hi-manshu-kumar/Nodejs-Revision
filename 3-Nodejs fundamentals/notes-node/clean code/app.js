console.log('Starting app.');

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

if (command == "add") {
    notes.addNote(argv.title,argv.body);
} else if ( command == 'list'){
    notes.getAll();
}  else if ( command == 'remove'){
    notes.removeNote(argv.title);
}  else if ( command == 'read'){
    notes.getNote(argv.title);
} else {
    console.log('command not recognized');
}  

