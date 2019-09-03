# IMongoDB

## More Like This

The **More Like This** service is a module of recommendations based on the current movie item view. For the purposes of this front end design the MongoDB database has been seeded from the `database/seed.js` file with randomly generated data made with [faker.js](https://www.npmjs.com/package/faker) and images from the [OMDb API](http://www.omdbapi.com/).

The service runs on a Node/Express server, Mongoose as the DBMS for MongoDB, and React and styled-components for the client-side rendered UI.

This repo integrates **CircleCI** for continuous integration. Pull requests must pass the CircleCI build in order to be merged. The CircleCI build runs the unit and integration tests which have been set up with Jest and Enzyme.

### Demo
![demo gif](https://hrr40-fec2-jeremypurser.s3.us-east-2.amazonaws.com/morelikethis.gif)