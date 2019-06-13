require('chai').should();

const cakes = require('../index.js');

describe('Basic Tests', function() {
  var recipe, available;

  it('should return a warning string when not passed two objects.', function () {
    recipe = {almondFlour: 500, sugar: 200, eggs: 1};
    cakes(recipe, 'Need to go grocery shopping.').should.eql('Please enter two objects.');
    cakes(recipe, ['Need to go grocery shopping.']).should.eql('Please enter two objects.');
  });

  it('should return the maximum number of cakes as an integer', function() {
    recipe = {flour: 500, sugar: 200, eggs: 1};
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    cakes(recipe, available).should.eql(2);
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    cakes(recipe, available).should.eql(0);
  });
});
