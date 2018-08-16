const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    // filter notes , removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

}

var logNote = (note) => {
    debugger;
    console.log("--");
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`);
    console.log("--");
}

module.exports = {
    //addNote: addNote // if we have same property and value we can leave it withn single name bcoz of es6 syntax
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}