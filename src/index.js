module.exports = function reverse (n) {
  return Number(n.toString().replace(/-|0$/, '').split('').reverse().join(''))
}
