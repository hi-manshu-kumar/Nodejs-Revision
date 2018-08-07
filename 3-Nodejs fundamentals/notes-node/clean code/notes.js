console.log("starting notes.js");
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    }catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title );

    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    };
}

var getAll = () => {
    console.log("getting all notes");
}

var getNote = (title) => {
    console.log('getting note', title);
}

var removeNote = (title) => {
    console.log('removing note', title);
}

module.exports = {
    //addNote: addNote // if we have same property and value we can leave it withn single name bcoz of es6 syntax
    addNote,
    getAll,
    getNote,
    removeNote
}