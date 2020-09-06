//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (a, b) => {
    if (Array.isArray(a) && Array.isArray(b)) {
        switchedA = b.slice().reverse()
        switchedB = a.slice().reverse()
        a.splice(0,a.length)
        b.splice(0,b.length)
        switchedA.forEach(currV => {
            a.push(currV)
        })
        switchedB.forEach(currV => {
            b.push(currV)
        })
    }
    else {
        throw new Error('wtf')
    }
}
module.exports = { arrayexchange };
