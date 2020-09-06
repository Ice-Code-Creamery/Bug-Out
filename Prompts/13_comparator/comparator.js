//write a func that takes two arg... selectKey and obj

const comparator = (key, objArr) => {
    if(!Object.keys(objArr[0]).includes(key)) {
        return 'incorrect key'
    }
    if(typeof(objArr[0][key]) == 'number') {
        return objArr.sort(function(a,b)  {
            return a[key] - b[key]  
    })}
    if(typeof(objArr[0][key]) == 'string') {
        return objArr.sort(function(a,b)  {
            aLast =a[key].split(' ')[1].toUpperCase()
            bLast =b[key].split(' ')[1].toUpperCase()
            if (aLast > bLast) {
                return 1;
              }
            if (aLast < bLast) {
                return -1;
            }
    })
}
};

const people = [
    { name: 'Noah J', age: 20 },
    { name: 'Justin Cook', age: 22 },
    { name: 'Ethan K', age: 21 },
  ];

console.log(comparator('name',people))
module.exports = { comparator };
