// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('fu')
    }
    this.done = false
    this.count = 0
    this.arr = arr
  }
  next() {
    const obj = ({
      done: this.done,
      value: this.arr[this.count]
    })
    this.count += 1
    if (this.count > this.arr.length - 1) {
      this.done = true
    }
    return obj
  }
}

module.exports = { Iterator };
