/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  newObj = {}
  for(let i = 0; i < objs.length; i++) {
    currObj = objs[i];
    currObjKeys = Object.keys(currObj);
    for(let j = 0; j < currObjKeys.length;j++) {
      if(!newObj.hasOwnProperty(currObjKeys[j])) {
        newObj[currObjKeys[j]] = 0;
      }
      newObj[currObjKeys[j]] = newObj[currObjKeys[j]] + currObj[currObjKeys[j]]
      } 
    }
  return newObj
  }


  let result = zip([
    { bleep: 1 },
    { blop: 2, blarp: 22 },
    { bleep: 10, blarp: 2 },
    { blop: 10 },
    {},
  ]);

  console.log(result)
module.exports = { zip };
