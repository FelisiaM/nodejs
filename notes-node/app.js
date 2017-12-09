console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filteredArray = _.uniq(['Kelii', '1', 'Feli', '1', '2'])
console.log(filteredArray)
// var res = notes.addNote();

// console.log(notes.add(19, 1));
// var user = os.userInfo();

// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}`);

