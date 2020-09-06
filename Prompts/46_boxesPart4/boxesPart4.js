//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  expand(num, arr) {
    this.capacity += num
    arr.forEach(box => {
      this.pack(box[0], box[1])
    })
  }
  loot(num) {
    if (this.contents[num]) {
      return this.contents[num]
    }
    else {
      return this.contents[Math.floor(Math.random)*this.contents.length]
    }
  }
}

module.exports = { Box };
