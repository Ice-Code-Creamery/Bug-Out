/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE

class digitalRoot {
    constructor() {
        
    }
    root(num) {
        const arr = num.toString().split("").map(val => parseInt(val))
        console.log(arr)
        if(arr.length == 1) {
            console.log('returning ',arr[0])
            return arr[0]
        }
        else{
            const newNum = arr.reduce((a,b) => {return a+b})
            console.log(newNum)
            return this.root(newNum)
        }
    }
}


module.exports = { digitalRoot };
