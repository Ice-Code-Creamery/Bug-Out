//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (masterObj) => {
  if (typeof(masterObj) != 'object') {
    throw new Error('nope')
  }
  const recurse = function (obj, depth) {
    const objKeys = Object.keys(obj)
    obj.depth = depth;
    depth++
    for (let i = 0; i < objKeys.length; i++) {
      if (typeof (obj[objKeys[i]]) == 'object') {
        recurse(obj[objKeys[i]], depth)
      }
    }
    depth -=1
    console.log(obj)
    return obj
  }
  return recurse(masterObj, depth=0)
};

module.exports = { recordDepth };
