
// You should implement your task here.
let arr = [];
module.exports = function towelSort (matrix) {
  if (matrix && matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse() 
      }
      arr = matrix.toString().split(",").map(val => parseInt(val)); 
    }
    return  arr
  } else {
    return []
  }
 
};
