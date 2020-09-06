//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (int) => {
  if (int < 0 || int == 0 || int >= 4000) {
    throw new Error('nope')
  }
  strArr = int.toString().split('')
  // console.log(strArr)
  length = strArr.length
  // console.log(length)
  const dict = [
    {
      0:'',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
    },
    {
      0:'',
      1:'X',
      2:'XX',
      3: 'XXX',
      4:'XL',
      5:'L',
      6:'LX',
      7:'LXX',
      8:'LXXX',
      9:'XC'
    },
    {
      0:'',
      1: 'C',
      2:'CC',
      3:'CCC',
      4:'CD',
      5:'D',
      6:'DC',
      7:'DCC',
      8:'DCCC',
      9:'CM'
    },
    {
      0:'',
      1: 'M',
      2:'MM',
      3:'MMM'
    }

  ]
  returnStr = ''
  for (let i = 0; i<length; i++) {
    // console.log('i is '+i)
    const poppedVal = strArr.pop();
    // console.log(poppedVal)
    // console.log(dict[length-i-1])
    // console.log(returnStr)
    returnStr = dict[i][parseInt(poppedVal)] + returnStr
  }
  return returnStr;
};

// console.log(romanInteger(1111))


module.exports = { romanInteger };
