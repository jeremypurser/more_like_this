const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://mongo:27017/imongodb',
  { useNewUrlParse: true });

module.exports = db;