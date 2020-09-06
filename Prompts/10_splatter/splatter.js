//write the splatter function

const splatter = (...args) => {
  sum = 0;
  for(let i = 0 ; i<args.length;i++) {
    add = Object.values(args[i])
    sum +=add.reduce((x,y) => parseInt(x)+parseInt(y))
  }
  return sum
};

const genArg = (multi) => {
  let ranArguments = [];
  let totalValue = 0;
  let argumentSize = Math.floor(Math.random() * multi) + 1;
  for (let j = 0; j < argumentSize; j++) {
    let [obj, val] = genObj(5);
    // console.log(obj)
    // console.log(val)
    ranArguments.push(obj);
    totalValue += val;
  }
  return [ranArguments, totalValue];

};
const genObj = (multi) => {
  let parentObj = {};
  let objSize = Math.floor(Math.random() * multi) + 1;
  let value = 0;
  for (let i = 0; i < objSize; i++) {
    let temp = Math.floor(Math.random() * 20);
    let alpha = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    if (parentObj[alpha]) parentObj[alpha] += temp;
    else parentObj[alpha] = temp;
    value += temp;
  }
  return [parentObj, value];
};

let [argArray, answer] = genArg(10);
const ranSplat = splatter(...argArray);

console.log('ranSplat is '+ranSplat)
console.log('answer is '+answer)

module.exports = { splatter };
