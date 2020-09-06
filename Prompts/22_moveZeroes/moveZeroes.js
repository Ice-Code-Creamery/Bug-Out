const moveZeroes = (arr) => {
  console.log('arr fed is '+arr)
  numZeros = arr.reduce(function (accumulator, currentValue) {
    console.log('currentValue is '+currentValue)
    if(currentValue ==0) {
      
      console.log(accumulator)
      return accumulator + 1
    }
    else {
      return accumulator 
  }
},0)
  console.log(numZeros)
  while(arr.includes(0)) {
    arr.splice(arr.indexOf(0),1)
  }
  for (let i = 0; i < numZeros; i++) {
    arr.push(0)
  }
  return arr
};

module.exports = { moveZeroes };
