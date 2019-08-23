const mongoose = require('mongoose');

let mongoURL;
if (process.env.NODE_ENV !== 'test') {
  mongoURL = 'mongodb://localhost/imongodb';
} else {
  mongoURL = 'localhost:27017';
}

const db = mongoose.connect(mongoURL, { useNewUrlParser: true });

module.exports = db;