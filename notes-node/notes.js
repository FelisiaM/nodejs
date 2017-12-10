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

    return fetchNotes(fileName);
}

var getNote = (title) => {
    console.log('Getting note', title);

    var notes = fetchNotes(fileName);

    var requestedNote = notes.filter(
        (note) => { return note.title === title })

    if (requestedNote.length === 1) {
        return requestedNote[0];
    }
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

var logNote = (note) => {
    console.log("--------------");
    console.log("Title:", note.title);
    console.log("Body:", note.body);
}

module.exports = {
    addNote, //same ass addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
};