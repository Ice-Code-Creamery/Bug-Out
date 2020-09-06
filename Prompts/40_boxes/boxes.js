//YOUR CODE HERE

class Box {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = capacity;
        this.contents = []
        this.length = 0
    }
    pack(color, length) {
        if (this.length + length > this.capacity) {
            throw new Error('nope')
        }
        this.length += length
        const box = new Box(color, length)
        this.contents.push(box)
    }
    unpack() {
        let returnArr = []
        returnArr.push(this.color)
        const recurse = function(box) {
            let returnArr = []
            returnArr.push(box.color)
            if (box.length == 0) {
                return returnArr
            }
            else {
                for (let i = 0; i < box.contents.length; i++) {
                    console.log(box.contents[i])
                    returnArr = [...returnArr,...recurse(box.contents[i])]
                }
            }
            return returnArr
        }
        if (this.contents.length == 0) {
            return returnArr
        }
        else {
            for (let i = 0; i < this.contents.length; i++) {
                console.log(this.contents[i])
                returnArr = [...returnArr,...recurse(this.contents[i])]
            }
        }
        console.log(returnArr)
        return returnArr
    }
}


module.exports = { Box };
