require('chai').should();

const cake = require('../index.js');

describe('description example', function() {
  var recipe, available;

  it('should return a warning string when passed a non-array argument', function () {
    recipe = {almond-flour: 500, sugar: 200, eggs: 1};
    cakes(recipe, 'Need to go grocery shopping.').should.eql('Please enter two arrays.');
  });

  it('should only accept positive integers', function () {
    recipe = {flour: 500, brown-sugar: 200, eggs: 1, butter: 1};
    available = {flour: 1200, brown-sugar: -1200, eggs: 5, butter: -2};
    cake([1],[-2]).should.eql('Please enter positive integers only.');
  });

  it('pass example tests', function() {
    recipe = {flour: 500, sugar: 200, eggs: 1};
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
  });
});