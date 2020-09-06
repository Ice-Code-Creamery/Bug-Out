//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  let result = {}
  const recurse = (cur, add) => {
    const values = Object.values(cur)
    for (let i = 0; i < values.length; i++) {
      if (typeof (values[i]) != 'object') {

  }

    }
  }
};

module.exports = { directory };
