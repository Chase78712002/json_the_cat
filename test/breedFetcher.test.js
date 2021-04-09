const { fetchBreedDescription} = require('../breedFetcher');
const assert = require('chai').assert.strictEqual;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, description)=> {
      assert(err, null);

      const expectedDescription = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';
      assert(description.trim(), expectedDescription);

      done();
    });
  });

  it('returns a string of error message for invalid breed', (done) => {
    fetchBreedDescription('notACatBreed', (err, description) => {
      const expectedErr = 'Breed notACatBreed was not found in our system, Sorry!';
      
      assert(err.trim(), expectedErr);
      assert(description, null);

      done();
    });
  });
});