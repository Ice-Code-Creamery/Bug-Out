// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  newObj = {}
  keys = Object.keys(obj);
  for(let i = 0;i<keys.length;i++) {
    if(obj[keys[i]] == null || obj[keys[i]] == undefined) {
      
    }
    else{
      newObj[keys[i]] = obj[keys[i]];
    }
  }
  return newObj;
};

module.exports = { trim };
