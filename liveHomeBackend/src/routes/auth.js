'use strict'

const express = require('express')
const passport = require('passport')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const AuthService = require('./../services/auth')
const UserService = require('./../services/user')
const UsersTypeService = require('./../services/usersType')
const validationHandler = require('./../utils/middleware/validationHandler')
const { authCreateSchema } = require('./../utils/schemas/auth')
const config = require('./../../config')

// Basic strategy
require('./../utils/auth/strategies/basic')

function authApi (app) {
  const router = express()
  const authService = new AuthService()
  const userService = new UserService()
  const usersTypeService = new UsersTypeService()

  app.use('/api/auth', router)
  router.post('/sign-in', async function (req, res, next) {
    passport.authenticate('basic', async function (error, auth) {
      try {
        if (error) {
          next(boom.unauthorized())
        }

        if (!auth) {
          next(boom.unauthorized())
        }

        req.login(auth, { session: false }, async function (error) {
          if (error) {
            next(error)
          }
        })

        const query = {
          authId: parseInt(auth.id)
        }

        const user = await userService.get(query)
        let userType
        let userId
        if (user) {
          userId = user[0].id
          userType = await usersTypeService.getById(user[0].typeUserId)
        }

        const { id, userName, email } = auth
        const payload = {
          sub: id,
          userName,
          email,
          userType: userType ? userType.name : '',
          userId
        }

        const token = jwt.sign(payload, config.auth.authJwtSecret, { expiresIn: '60m' })

        return res.status(200).json({ token })
      } catch (error) {
        next(error)
      }
    })(req, res, next)
  })

  router.post('/sign-up',
    validationHandler(authCreateSchema),
    async function (req, res, next) {
      try {
        const { body: auth } = req
        const { email } = auth
        const validateUser = await authService.findByEmail(email)

        if (validateUser) {
          res.status(401).json({
            data: {},
            message: 'Invalid user name or email'
          })
        } else {
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
            typeUserId: 1,
            documentType: null,
            documentNumber: null,
            phone: null
          }

          await userService.create(user)

          res.status(201).json({
            data: authCreated,
            message: 'Auth created'
          })
        }
      } catch (error) {
        next(error)
      }
    })
}

module.exports = authApi
