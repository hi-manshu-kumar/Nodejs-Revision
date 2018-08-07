console.log("starting notes.js");

var addNote = (title, body) => {
    console.log('adding Note', title, body);
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