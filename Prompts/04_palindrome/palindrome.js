/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const charList = function(char1, char2) {
  var a = [], i = char1.charCodeAt(0), j = char2.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

smallA = charList("a","z")
bigA = charList("A","Z")
nums = [0,1,2,3,4,5,6,7,8,9]
ultimateL = [...smallA,...bigA,...nums]


const validPalindrome = (input) => {
  if(typeof(input) == 'number') {
    input = input.toString();
  }
  l = input.split("");
  newL = []
  for(i=0;i<l.length;i++) {
    if(ultimateL.includes(l[i])) {
      newL.push(l[i].toLowerCase())
    }
  }
  l2 = newL.slice().reverse()
  console.log('yo')
  return newL.join("") == l2.join("")

};
validPalindrome("not a palindrome")

module.exports = { validPalindrome };
