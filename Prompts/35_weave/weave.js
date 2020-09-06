// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = function() {
  // console.log(inputs)
  // console.log(Object.values(arguments))
  const inputs = Object.values(arguments)
  // console.log('inputs are ',inputs)
  for (let i = 0; i < inputs.length; i++) {
    if (!Array.isArray(inputs[i])) {
      throw new Error('nope')
    }
  }
  let returnArr = []
  const lengthArr = inputs.map(currV => { return currV.length })
  const maxLength = Math.max(...lengthArr)
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < inputs.length; j++) {
      returnArr.push(inputs[j][i]? inputs[j][i] : null)
    }
  }
  return returnArr
};

module.exports = { weave };
