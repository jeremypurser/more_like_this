const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const Movie = require('../database/Movie.js');
const getRandomDocs = require('../utils');
const port = 3001;

app.use(express.static(__dirname + '/../public'));
app.use(cors({
  origin: function(origin, next) {
    var allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001'
    ];
    if (allowedOrigins.indexOf(origin) === -1) {
      const message = 'The CORS policy for this site does not \
        allow access from the specified Origin.';
      return next(new Error(message), false);
    }
    return next(null, true);
  }
}));

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