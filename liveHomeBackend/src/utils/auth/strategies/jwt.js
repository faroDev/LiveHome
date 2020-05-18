const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const UserService = require('./../../../services/user')
const config = require('./../../../../config')

passport.use(
  new Strategy(
    {
      secretOrKey: config.auth.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function (tokenPayload, cb) {
      const userService = new UserService()

      try {
        const user = userService.getUser({ email: tokenPayload.email })
        if (!user) {
          return cb(boom.unauthorized(), false)
        }

        delete user.password

        return cb(null, { ...user, scopes: tokenPayload.scopes })
      } catch (error) {
        cb(error)
      }
    }
  )
)
