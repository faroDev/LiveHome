'use strict'
const express = require('express')
const passport = require('passport')
const UserService = require('./../services/user')
const PropertyService = require('./../services/property')
const ViewsService = require('./../services/views')
const FavoriteService = require('./../services/favorite')
const validationHandler = require('./../utils/middleware/validationHandler')
const { userIdSchema, userCreateSchema, userUpdateSchema, userQuerySchema } = require('./../utils/schemas/users')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function userApi (app) {
  const router = express()
  const userService = new UserService()
  const propertyService = new PropertyService()
  const viewsService = new ViewsService()
  const favoriteService = new FavoriteService()

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
        const { id } = req.params

        const properties = await propertyService.getByUserId(id)
        const views = await viewsService.getAmountByUserId(id)
        const favorites = await favoriteService.getAmountByUserId(id)

        res.status(200).json({
          data: {
            offers: properties.length,
            visitors: views || 0,
            favorites: favorites || 0,
            properties: properties || []
          },
          message: 'User dashboard retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id/favorites',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: userIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const favorites = await favoriteService.getAllByUserId(id)

        res.status(200).json({
          data: favorites || [],
          message: 'Favorites retrieved'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = userApi
