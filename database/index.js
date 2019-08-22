const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/imongodb';

const db = mongoose.connect(mongoURL);

module.exports = db;