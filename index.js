const { fetchBreedDescription } = require('./breedFetcher');
const userInput = process.argv[2];

fetchBreedDescription(userInput, (err, description) => {
  if (err) {
    console.log(err);
  } else {
    console.log(description);
  }
});