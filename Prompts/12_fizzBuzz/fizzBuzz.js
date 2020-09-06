const fizzBuzz = (num) => {
  if(typeof(num) != 'number' || num<1) {
    throw new Error('input incorrect')
  }
  returnArr = []
  for(let i = 1; i<num+1;i++) {
    // console.log(i)
    if(i%3 ==0 && i%5 ==0) {
      returnArr.push('FizzBuzz')
    }
    else if(i%3 == 0 && i% 5 != 0) {
      returnArr.push('Fizz')
    }
    else if(i%5 == 0 && i%3 != 0) {
      returnArr.push('Buzz')
    }
    else {
      returnArr.push(i)
    }
    // console.log(returnArr)
  }
  return returnArr
};

console.log(fizzBuzz(30))
module.exports = { fizzBuzz };
