'use strict'
const express = require('express')
const passport = require('passport')
const ViewsService = require('./../services/views')
const validationHandler = require('./../utils/middleware/validationHandler')
const { viewIdSchema, viewCreateSchema, viewUpdateSchema, viewQuerySchema } = require('./../utils/schemas/views')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function viewApi (app) {
  const router = express()
  const viewsService = new ViewsService()

  app.use('/api/views', router)

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(viewQuerySchema, 'query'),
    async function (req, res, next) {
      try {
        const views = await viewsService.get()

        res.status(200).json({
          data: views || [],
          message: 'Views listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: viewIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const view = await viewsService.getById(id)

        res.status(200).json({
          data: view || {},
          message: 'View retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: viewIdSchema }, 'params'),
    validationHandler(viewUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: view } = req

        const viewUpdated = await viewsService.update(id, view)

        res.status(200).json({
          data: viewUpdated,
          message: 'View updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(viewCreateSchema),
    async function (req, res, next) {
      try {
        const { body: view } = req

        const viewCreated = await viewsService.create(view)

        res.status(201).json({
          data: viewCreated,
          message: 'View created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = viewApi
