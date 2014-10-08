var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
});

describe('Iterators', function () {
  describe('#min', function () {
    var myArr;
    beforeEach(function () {
      myArr = [66, 22, 67, 34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
});


describe('Iterators', function () {
  describe('#each', function () {
    var myArr;
    beforeEach(function () {
      myArr = [66, 22, 67, 34];
    });

  it("should return an action to each value in array", function() {
    var sum = 0;
    Iterators.each(myArr, function (item){
      sum += item; 
    }
  }
  expect(sum).to.equal(6);
});

// describe('Iterators', function () {
//   describe('Each', function () {
//     var myArr;
//     var thingshappen = function(){

//     };
//     beforeEach(function () {
//       myArr = [66, 22, 67, 34];
//     });
//     it('Executes a provided function once per array element', function () {
//       expect(Iterators.each(myArr, thingshappen)).to.equal(67);
//     });
//   });
// });

// describe('Iterators', function () {
//   describe('Map', function () {
//     var myArr;
//     var addOne = function(a){
//       a = a + 1;
//       return a;
//     };

//     beforeEach(function () {
//       myArr = [66, 22, 67, 34];
//     });
//     it('should add 1 to each element of the array', function () {
//       expect(Iterators.map(myArr, addOne)).to.equal([67, 23, 68, 35]);
//     });
//   });
// });

 // map test
describe("map", function(){
  var myArr;
    beforeEach(function () {
    myArr = [66, 22, 67, 34];
  });

  var timesTwo = function(x){
    return x+1;
  };

  it("should create a new array of values*2", function(){
  // Test starts here, call map function
    var result = Iterators.map(myArr, timesTwo);

    // now compare result with expected
    expect(result).to.deep.equal([67, 23, 68, 35]);
    });
});

describe("filter", function(){
  it("it should ...", function(){
    
  });
});

describe("reduce", function(){
  it("it should ...", function(){
    
  });
});

describe("reject", function(){
  it("it should ...", function(){
    
  });
});