console.log('Starting nodes.js');
const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notes = [];
    var note = {
        title,
        body
    };
    var fileName = 'notes-data.json';

    try {
        var notesString = fs.readFileSync(fileName);
        notes = JSON.parse(notesString);
    } catch (e) {
        // do nothing if there is no previous file
    }

    var dublicateNotes = notes.filter((note) => { return note.title === title });

    if (dublicateNotes.length === 0) {
        notes.push(note);

        fs.writeFileSync(
            fileName,
            JSON.stringify(notes));
    }

}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote, //same ass addNote: addNote
    getAll,
    getNote,
    removeNote
};