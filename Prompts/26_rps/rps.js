//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/
rockStr = 'rock'
scissorStr = 'scissors'
paperStr = 'paper'


class RPS {
  // takes in players to initiate teh class -class is taken as a series of strings //
  constructor() {
    this.players = Object.values(arguments);
    this.scores = {}
    this.players.forEach(currV => {
      this.scores[currV] = 0
    })
  }
  play() {
    // takes in the moves of each player -each has the same index as the player in the first initiation
    const values = Object.values(arguments).map(function(str) {return str.toLowerCase()})
    // console.log('values are '+values)
    let rockCount = 0
    let scissorCount = 0
    let paperCount = 0
    const totalCount = values.length
    values.forEach(currV => {
      if(currV == rockStr) {
        rockCount += 1
      }
      if(currV == scissorStr) {
        scissorCount += 1
      }
      if(currV == paperStr) {
        paperCount += 1
      }
    })
    // console.log(rockCount, scissorCount,paperCount, totalCount)
    let msg;
    values.forEach((currV,index) => {
      // console.log(currV)
      // console.log(scissorCount == totalCount-1)
      // console.log(rockStr == currV)
      // console.log(currV == rockStr && scissorCount == (totalCount-1))
      if(currV == rockStr && scissorCount == (totalCount-1)) {
        this.scores[this.players[index]] +=1
        msg = `Rock defeats Scissors, ${this.players[index]} wins this round.`
        // return `Rock defeats Scissors ${this.players[index]} wins this round`
      }
      else if(currV == scissorStr && paperCount == totalCount-1) {
        this.scores[this.players[index]] +=1
        msg = `Scissors defeats Paper, ${this.players[index]} wins this round.`
        // return `Scissors defeats Paper ${this.players[index]} wins this round`
      }
      else if(currV == paperStr && rockCount == totalCount-1) {
        this.scores[this.players[index]] +=1
        msg = `Paper defeats Rock, ${this.players[index]} wins this round.`
        // return `Paper defeats Rock ${this.players[index]} wins this round`
      }
    })
    console.log(this.scores)
    return msg
  }
  
  winner() {
    const scoresValues = Object.values(this.scores)
    const max = Math.max(...scoresValues)
    const index = scoresValues.indexOf(max);
    return `The victor is ${this.players[index]} with ${this.scores[this.players[index]]} points.`
  }
}

module.exports = { RPS };
