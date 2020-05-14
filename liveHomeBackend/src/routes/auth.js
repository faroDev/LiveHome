
'use strict'
const express = require('express')
const AuthService = require('./../services/auth')
const UserService = require('./../services/user')

function authApi (app) {
  const router = express()
  const authService = new AuthService()
  const userService = new UserService()

  app.use('/api/auth', router)

  router.post('/sign-up', async function (req, res, next) {
    try {
      const { body: auth } = req
      const authCreated = await authService.create(auth)
      delete authCreated.password

      const user = {
        name: null,
        lastName: null,
        secondLastName: null,
        status: true,
        createAt: new Date(),
        updateAt: new Date(),
        authId: authCreated.id,
        typeUserId: 1
      }

      await userService.create(user)

      res.status(200).json({
        data: authCreated,
        message: 'Auth created'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = authApi