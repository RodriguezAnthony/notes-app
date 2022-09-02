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
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function () {
        console.log('Reading note')
    }
})

console.log(yargs.argv)