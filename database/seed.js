const Movie = require('./Movie.js');
const faker = require('faker');

const generateMovie = (n) => {
  const movie = {};
  // title
  const title = faker.random.words();
  const titleArr = title.split(' ');
  const capitalizedTitle = titleArr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
  movie.title = capitalizedTitle;
  movie.year = faker.date.between(1950, 2019).getYear() + 1900;
  // rating
  const ratings = ['G', 'PG', 'PG-13', 'R'];
  movie.mpaaRating = ratings[Math.floor(Math.random() * 4)];
  const genres = ['Comedy', 'Sci-fi', 'Horror', 'Romance', 'Action', 'Thriller', 'Drama', 'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy', 'Mystery', 'Musical'];
  // 2 genres per movie
  movie.genre = [genres[Math.floor(Math.random() * 14)], genres[Math.floor(Math.random() * 14)]];
  // movie image from S3
  movie.coverImage = `https://hrr40-fec2-jeremypurser.s3.us-east-2.amazonaws.com/movie_img${n}.jpg`;
  // movie rating, lowest is 2, rounded to tenths
  const randomNum = Math.random() * 8 + 2;
  movie.reviewRating = [Math.max(Math.round(randomNum * 10) / 10, 2.8)];
  // summary
  movie.summary = faker.lorem.paragraph();
  // director
  movie.director = faker.name.findName();
  // stars aka actor names
  movie.stars = [faker.name.findName(), faker.name.findName(), faker.name.findName()];
  return movie;
};

const seedData = () => {
  const seeds = [];
  for (let i = 0; i < 100; i++) {
    seeds.push(generateMovie(i));
  }
  return seeds;
};

const seeds = seedData();

// Mongoose creating and saving documents
// https://mongoosejs.com/docs/api/model.html#model_Model.create
Movie.create(seeds, (err, movies) => {
  if (err) {
    console.log('Error while seeding db');
  }
});