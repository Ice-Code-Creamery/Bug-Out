// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // console.log(str)
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  wordArr = str.split("")
  retArr = []
  wordArr.forEach(e => {
    // console.log('parseInt is ', parseInt(e))
    if (!numbers.includes(parseInt(e)) &&
      !alphabet.includes(e.toLowerCase())) {
      throw new Error('you suck')
    }
    else {
      // console.log(typeof(e))
      // console.log('parseInt is ',parseInt(e),typeof(parseInt(e)))
      if (isNaN(parseInt(e))) {
        // console.log('word trig ', e)
        const lower = alphabet.includes(e)
        const idx = alphabet.indexOf(e.toLowerCase())
        let idx_new = idx + shift % alphabet.length
        console.log(idx_new)
        if(idx_new < 0) {
          idx_new = alphabet.length +idx_new
        }
        // console.log('on ',str, 'idx_new is ',idx_new)
        if(idx_new > wordArr.length) {
          idx_new = idx_new%alphabet.length
        }
        // console.log('on ',str, 'idx_new is after mutation',idx_new)
        // console.log('idx is ', idx, 'idx_new is ', idx_new)
        if (lower) {
          retArr.push(alphabet[idx_new])
        }
        else {
          retArr.push(alphabet[idx_new].toUpperCase())
        }
      }
      else {
        // console.log('num trig ', e)
        let idx_new = (parseInt(e)+shift)%10
        if(idx_new <0) {
          idx_new = 10+idx_new
        }
        retArr.push(numbers[idx_new])
      }
    }
  })
  return retArr.join("")
};

module.exports = { encryptString };
