const findBy = (arr, prop, value) => {
  return arr.find(element => element[prop] == value)
};

module.exports = { findBy };
