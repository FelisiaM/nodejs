console.log('Starting nodes.js');
const fs = require('fs');

const fileName = 'notes-data.json';

var fetchNotes = (fileName) => {
    try {
        var notesString = fs.readFileSync(fileName);
        return JSON.parse(notesString);
    } catch (e) {
        // do nothing if there is no previous file
        return [];
    }
};

var saveNotes = (fileName, notes) => {
    fs.writeFileSync(
        fileName,
        JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log('Adding note', title, body);

    var notes = fetchNotes(fileName);
    var note = {
        title,
        body
    };

    var dublicateNotes = notes.filter((note) => { return note.title === title });

    if (dublicateNotes.length === 0) {
        notes.push(note);
        saveNotes(fileName, notes);
        return true;
    }

}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {

    var notes = fetchNotes(fileName);

    var notesWithoutTheRequestedTitle = notes.filter(
        (note) => { return note.title !== title })

    //save
    if (notes.length !== notesWithoutTheRequestedTitle.length) {
        saveNotes(fileName, notesWithoutTheRequestedTitle);
        return true;
    }
}

module.exports = {
    addNote, //same ass addNote: addNote
    getAll,
    getNote,
    removeNote
};