console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if(command === 'add'){
    var result = notes.addNote(argv.title, argv.body);
    if(result){
        console.log("Note added successfully");
    }
    else{
        console.log("Dublicate title detected. Note not added.");        
    }
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    var result = notes.removeNote(argv.title);
    if(result){
        console.log("Note removed successfully");
    }
    else{
        console.log('Note note found.');
    }
} else {
    console.log('Command not recognised')
}
