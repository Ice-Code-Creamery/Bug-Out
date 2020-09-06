//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
    count = 0;
    inputArr = []
    console.log('inputArr is now '+inputArr)
    taker = (input) => {
        console.log('taker with input '+input)
        if (typeof (input) != 'number') {
            throw new Error('fuck you')
        }
        else if(inputArr.length ==1) {
            return func(inputArr[0],input)
        }
        else {
            inputArr.push(input)
            console.log(inputArr)
            return taker
        }
    }
    if (typeof (func) != 'function' && count == 0) {
        throw new Error('first input not a function')
    }
    console.log('returning taker, taker is')
    console.log(inputArr)
    return taker
};


module.exports = { extensions };
