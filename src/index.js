
// You should implement your task here.

const { sort } = require("semver");

module.exports = function towelSort (matrix) {  
  if(!Array.isArray(matrix)) {
    return [];
  }  
  let sort = matrix.reduce((res,item, index) => {                
    if (index % 2 == 0 ) {
      res = res.concat(item.sort((a, b) =>  a - b));
    } else {
      res = res.concat(item.sort((a, b) =>  b - a));
    }    
    return res;                  
  }, []);
  return sort;
}

