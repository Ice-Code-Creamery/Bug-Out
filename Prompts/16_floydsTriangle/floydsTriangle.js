// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    if(n ==0 || n ==undefined) {
        return ''
    }
        num = 0
    for (let i = 0; i < n; i++) {
        num += (i + 1)
    }
    f = 1
    arr = []
    for (let i = 0; i < num; i++) {
        subArr = []
        for (let j = 0; j < f; j++) {
            subArr.push(i + 1)
            i += 1
        }
        i -= 1
        f += 1
        arr.push(subArr)
    }
    str = arr[0].join('')
    console.log(arr[0])
    for (let i = 1; i < arr.length; i++) {
        str = str + '\n' + arr[i].join('')
    }
    return str
};

module.exports = { floydsTriangle };
