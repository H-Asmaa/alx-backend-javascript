#!/usr/bin/node
/* A function that displays a message to the STDOUT. */
const displayMessage = (line) => process.stdout.write(line);

module.exports = displayMessage;
