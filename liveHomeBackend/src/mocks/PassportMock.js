
function authenticate (type, obj = {}) {
  return function (req, res, next) {
    next()
  }
}

module.exports = {
  authenticate
}
