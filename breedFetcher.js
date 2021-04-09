const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      throw new Error(`${error} has occured!`);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      let error = `Breed ${breedName} was not found in our system, Sorry!`;
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };