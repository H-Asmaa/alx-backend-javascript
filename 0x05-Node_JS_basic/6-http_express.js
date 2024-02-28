#!/usr/bin/node
/* Creating a small HTTP sever using express module. */
const app = require('express')();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`The app is listening on ${port}.`);
});
