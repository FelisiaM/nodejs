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
    var result = notes.getAll();
    console.log(`Printing ${result.length} note(s).`)
    result.forEach(
        (note) => 
        notes.logNote(note)
  );
} else if (command === 'read'){
    var result = notes.getNote(argv.title);
    if(result){
        console.log("Note found.");
        notes.logNote(result)      
    }
    else{
        console.log('Note not found.');
    }
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
