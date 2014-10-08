var iterators = {
  max: function (numList) {
    var max = -Infinity;
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
    }
    return max;
  },

  min: function (numList) {
    var min = Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] < min) {
        min = numList[i];
      }
    }
    return min;
  },

  each: function(items,myFunction) {
      for (var i =0; i < items.length; i++) {
        myFunction(items[i]);
      }
  },

  // each: function (numList, func) {
  //   var output = [];
  //   for (var i = 0; i < numList.length; i++) {
  //     output = numList[i] + 1;
  //   } 
  //   return output;
  // },
   
//   map: function (numList, func) {
//     var output = [];
//       for (var i = 0; i < numList.length; i++) {
//         // func(numList[i] + 1);
//         var chicken = func(numList[i] + 1);
//         output.push(func());
//     } 
//     return output;
//   },
// };
map: function (myArray, callback){
  var newArray = [];
  for (var i = 0; i < myArray.length; i++) {
    newArray.push(callback(myArray[i]));
  }
  return newArray;
}

};


module.exports = iterators;
