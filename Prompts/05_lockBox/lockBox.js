const lockBox = (num,msg) => {
  if(typeof(num)!= 'number' || typeof(msg) != 'string') {
    throw new Error('not cool')
  }
  let accessCode = num;
  let secretMessage = msg;
  
  return {
    modMessage: function(num, msg) {
      accessCode = num;
      secretMessage = msg;
      return msg;
    },
    modCode: (num1, num2) => {
      if(num1 != accessCode) {
        throw new Error('Access Denied!')
      } else {
        accessCode = num2;
        return accessCode;
      }
    },
    modMessage: (num, msg) => {
      if(num == accessCode) {
        secretMessage = msg;
        return secretMessage;
      }
    },
    revealMessage: (num) => {
      if(num == accessCode) {
        return secretMessage;
      }
      else{
        throw new Error('wrong message')
      }
    }
  }
};

module.exports = { lockBox };
