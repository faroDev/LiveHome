const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const AuthService = require('./../../../services/auth')
const config = require('./../../../../config')

passport.use(
  new Strategy(
    {
      secretOrKey: config.auth.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function (tokenPayload, cb) {
      const authService = new AuthService()

      try {
        const { email } = tokenPayload
        const auth = authService.findByEmail(email)
        if (!auth) {
          return cb(boom.unauthorized(), false)
        }

        delete auth.password

        return cb(null, { ...auth })
      } catch (error) {
        cb(error)
      }
    }
  )
)
