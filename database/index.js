const mongoose = require('mongoose');
let mongoURL = 'mongodb://localhost/imongodb';
mongoose.connect(mongoURL);

let movieSchema = mongoose.Schema({
  name:
  year:
  ageRating:
  genre:
  coverImage:
  reviewRating:
  summary:
  director:
  stars:
});