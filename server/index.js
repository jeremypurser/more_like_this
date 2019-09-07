const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const db = require('../database');
const Movie = require('../database/Movie.js');
const getRandomDocs = require('../utils');
const port = 3001;

app.use(express.static(__dirname + '/../public'));
app.use(cors());

app.get('/movies', (req, res) => {
  Movie.find({}, (err, docs) => {
    if (err) { throw err; }
    let clientDocs = getRandomDocs(docs, 12);
    res.send(clientDocs);
  });
});

// Don't listen to port in test
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
// Export module in test
} else {
  module.exports = app;
}