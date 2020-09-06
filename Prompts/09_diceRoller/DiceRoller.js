// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numOfDies) {
    if(sides < 1 || numOfDies < 1 || typeof(sides) != 'number' || typeof(numOfDies) != 'number') {
      throw error('hello')
    }
    this.sides = sides
    this.numOfDies = numOfDies
    this.numbers = new Array(1,sides)
    this.history = []
  }
  roll() {
    let arr = []
    for(let i = 0; i<this.numOfDies;i++) {
      let roll = Math.floor(Math.random() * (this.sides - 1 + 1) + 1)
      arr.push(roll)
    }
    this.history.push(arr)
    return arr
  }

}

module.exports = { DiceRoller };
