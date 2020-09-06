// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe,supplies) => {
  if(typeof(recipe)!= 'object' || typeof(supplies) != 'object') {
    throw new Error ('nope')
  }
  let nums = [];
  ingredients = Object.keys(recipe);
  for(let i = 0 ; i<ingredients.length;i++) {
    let newNum = Math.floor((supplies[ingredients[i]]) / (recipe[ingredients[i]]))
    if(isNaN(newNum)){
      console.log('returning 0')
      return 0
    }
    else {
      nums.push(newNum)
    }
    console.log(nums)
  }
  return Math.min(...nums)
};

module.exports = { btownbake };
