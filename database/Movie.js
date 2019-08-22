const mongoose = require('mongoose');
const db = require('.index.js');

const movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  mpaaRating: String,
  genre: [String],
  coverImage: String,
  reviewRating: [Number],
  summary: String,
  director: String,
  stars: [String]
});

const Movie = mongoose('Movie', movieSchema);
module.exports = Movie;