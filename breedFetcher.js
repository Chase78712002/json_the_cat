const request = require('request');
const userInput = process.argv[2];
request(`http://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    throw new Error(`${error} has occured!`);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Breed ${userInput} was not found in our system, Sorry!`);
  } else {
    console.log(data[0].description);
  }
});