// - "monkey-patching" means changing the behavior of built-in code at runtime.
// - your job is to monkey-patch the Array class, by adding a method called "countBy"
// - countBy should optionally take a function argument
// - countBy returns an object whose keys correspond to the elements in the array it is called on, and whose values correspond to the number of times that element appears in the array
// - when countBy is passed a function argument "fn", the values correspond to the number of times that key was returned by fn.
// - NB: monkey-patching is generally not good, do not do it, this is just an exercise
// - Also NB: repl.it doesn't let you monkey patch! but the chrome console does.

//code goes here

Array.prototype.countBy = function (func) {
    let arr = this.slice()
    console.log(typeof(func))
    if(typeof(func) == 'function') {
        console.log('triggered');
        arr = arr.map(currV => {return func(currV)});
        console.log(arr);
    }
    console.log(arr)
    const obj = {}
    arr.forEach(currV => {
        if (Object.keys(obj).includes(currV.toString())) {
            obj[currV.toString()] += 1
        }
        else {
            obj[currV.toString()] = 1
        }
    })
    return obj
}