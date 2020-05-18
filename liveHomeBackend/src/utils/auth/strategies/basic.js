const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const AuthService = require('./../../../services/auth')

passport.use(new BasicStrategy(async function (email, password, cb) {
  const authService = new AuthService()
  try {
    const auth = await authService.findByEmail(email)

    if (!auth) {
      return cb(boom.unauthorized(), false)
    }

    if (!(await bcrypt.compare(password, auth.password))) {
      return cb(boom.unauthorized(), false)
    }

    delete auth.password

    return cb(null, auth)
  } catch (error) {
    console.log(error)

    return cb(error)
  }
}))
