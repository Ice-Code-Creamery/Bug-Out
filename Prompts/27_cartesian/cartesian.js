const cartesian = (arr) => {
  if (Array.isArray(arr)) {
    const state = {
      'n': 0,
      'e': 0,
      's': 0,
      'w': 0
    }
    const states = Object.keys(state)
    arr.forEach(currV => {
      if (states.includes(currV)) {
        if (currV == 'n') {
          if (state['s'] > 0) {
            state['s'] -= 1
          }
          else{
            state['n'] +=1
          }
        }
        if (currV == 's') {
          if (state['n'] > 0) {
            state['n'] -= 1
          }
          else{
            state['s'] +=1
          }
        }
        if (currV == 'e') {
          if (state['w'] > 0) {
            state['w'] -= 1
          }
          else{
            state['e'] +=1
          }
        }
        if (currV == 'w') {
          if (state['e'] > 0) {
            state['e'] -= 1
          }
          else{
            state['w'] +=1
          }
        }
      }
    })
    if (Object.values(state).reduce((x, y) => x + y, 0) == 0) {
      return "These directions don't go anywhere!"
    }
    else {
      return state
    }
  }
  else {
    throw new Error('nope')
  }
};

module.exports = { cartesian };
