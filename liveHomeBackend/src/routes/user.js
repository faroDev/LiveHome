'use strict'
const express = require('express')
const passport = require('passport')
const UserService = require('./../services/user')
const validationHandler = require('./../utils/middleware/validationHandler')
const { userIdSchema, userCreateSchema, userUpdateSchema, userQuerySchema } = require('./../utils/schemas/users')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function userApi (app) {
  const router = express()
  const userService = new UserService()

  app.use('/api/users', router)

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(userQuerySchema, 'query'),
    async function (req, res, next) {
      try {
        const { query } = req
        const users = await userService.get(query)

        res.status(200).json({
          data: users || [],
          message: 'Users listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: userIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const user = await userService.getById(id)

        res.status(200).json({
          data: user || {},
          message: 'User retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: userIdSchema }, 'params'),
    validationHandler(userUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: user } = req

        const userUpdated = await userService.update(id, user)

        res.status(200).json({
          data: userUpdated,
          message: 'User updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(userCreateSchema),
    async function (req, res, next) {
      try {
        const { body: user } = req

        const userCreated = await userService.create(user)

        res.status(201).json({
          data: userCreated,
          message: 'User created'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id/dashboard',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: userIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        res.status(200).json({
          data: {
            offers: 10,
            visitors: 2000,
            favorites: 40,
            properties: [
              {
                id: 1,
                name: 'Casa',
                date: '2020-05-15',
                image: 'url'
              },
              {
                id: 2,
                name: 'Casa',
                date: '2020-05-15',
                image: 'url'
              },
              {
                id: 3,
                name: 'Casa',
                date: '2020-05-15',
                image: 'url'
              }
            ]
          },
          message: 'User dashboard retrieved'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = userApi
