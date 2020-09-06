// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = Object.assign({},initialState);
    this.count = 0
    this.states = [Object.assign({},this.state)]
  }
  setState(obj) {
    this.state[Object.keys(obj)[0]] = Object.values(obj)[0]
    this.count +=1
    this.states.push(Object.assign({},this.state))
    // console.log(this.state)
    // console.log(this.states)
    return this.state
  }
  goBack() {
    // console.log(this.states)
    this.states.pop()
    this.count -=1
    const previousState = this.states[this.count]
    // console.log(previousState)
    // console.log(this.states);
    this.state = previousState
  }
}

module.exports = { StatefulThing };
