const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');

app.use(express.static(__dirname + '/../public'));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});