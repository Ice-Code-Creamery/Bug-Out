//Given an object of likely nested objects, where the final element is an array containing positive integers
//write a function that returns the name of the root property that a particular integer lives in.
//ie:
// object = {
//   "one": {
//       "l1": {
//           "val1": [40, 65, 113, 200]
//        }
//   },
//   "two": {
//       "l1": [45, 1, 75, 80],
//       "l2": [12, 38, 2, 15]
//   },
//   "three": {
//       "l1": [10, 92, 53, 71],
//       "l2": [82, 34, 6, 19]
//   }
// }
//getrootvalue(object,40)=>'one'
//returns -1 if value isn't found

const getrootvalue = (object, val) => {
  console.log('getrootvalue run on ' +Object.keys(object).join(", "))
  for (let i in object) {
    console.log('i is '+ i)
    console.log('object[i] is '+Object.keys(object[i]).join(", "))
    if (typeof object[i] === 'object' && !Array.isArray(object[i])) {
      if (getrootvalue(object[i], val)) {
        console.log('returning i which is '+i)
        return i;
      }
    } else {
      if (object[i].includes(val)) {
        console.log('object[i] includes it, returning i which is '+i)
        return i;
      }
    }
  }
  console.log('returning null')
  return null;
};

module.exports = { getrootvalue };
