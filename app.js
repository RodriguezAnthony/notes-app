const yargs = require('yargs')
const getNotes = require('./notes.js')
const chalk = require('chalk')

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command

console.log(yargs.argv)