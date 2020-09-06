// see test specs
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function cache(func) {
  if (typeof (func) != 'function') {
    throw new Error('Input must be a function.')
  }
  cached = []
  return function () {
    values = Object.values(arguments)
    for (i in cached) {
      if (arraysEqual(cached[i][0], values)) {
        return cached[i][1]
      }
    }
    const output = func(...Object.values(arguments))
    cached.push([values,output])
    return output
  }
}

  module.exports = { cache };
