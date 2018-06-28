var findTreePaths = function(sum, node) {
  let paths = [];
  var checkCurrentPaths = function(node, max, currPath, currSum) {
    if (currSum === max) {
      paths.push(currPath);
    }
    if (node.left) {
      let leftSum = (currSum + node.left.value);
      let leftPath = currPath.concat(node.left.value);
      checkCurrentPaths(node.left, max, leftPath, leftSum);
    } 
    if (node.right) {
      let rightSum = (currSum + node.right.value);
      let rightPath = currPath.concat(node.right.value);
      checkCurrentPaths(node.right, max, rightPath, rightSum);
    }
  };
  return checkCurrentPaths(node, sum, [node.value], node.value); 
};

var getModulo = function(a, b){
  return a - (b * Math.floor(a/b)); 
}; 

var getPowerSum = function(c, d) {
  if (d === 0) {
    return 1; 
  } else if (d === 1) {
    return c; 
  }
  let e = c; 
  while (d > 1){
    e = (e * c);
    d -= 1; 
  }
  return e; 
}; 

var powerSumModulo = function(e, g, f) {
  return getModulo(getPowerSum(e, g), f); 
}; 
