const encrypt = (str) => {
  let returnArr = []
  let strL = str.split(' ')
  const encryptWord = function(word) {
    let wordL = word.split('')
    let wordArr= []
    wordArr.push(wordL[0].charCodeAt(0))
    wordArr.push(wordL.pop())
    let slicedWord = wordL.slice(2)
    wordArr = [...wordArr,...slicedWord]
    wordArr.push(wordL[1])
    return wordArr.join('')
  }
  strL.forEach(currV => {
    // console.log('word is ',currV)
    returnArr.push(encryptWord(currV))
  })
  console.log(returnArr.join(''))
  return returnArr.join(' ')
};

module.exports = { encrypt };
