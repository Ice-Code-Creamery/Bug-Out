// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  returnArr = []
  for(let i = 0; i<n;i++) {
    returnArr.push(func())
  }
  return returnArr
};

// see test specs to complete this stretch

module.exports = { repeater };
