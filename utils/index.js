const getRandomDocs = (array, resultLength) => {
  const result = [];
  while (result.length < resultLength) {
    let idx = Math.floor(Math.random() * array.length);
    result.push(array[idx]);
    array = array.slice(0, idx).concat(array.slice(idx + 1));
  }
  return result;
};

module.exports = getRandomDocs;