'use strict'
const express = require('express')
const StatusService = require('./../services/status')
const passport = require('passport')
const validationHandler = require('./../utils/middleware/validationHandler')
const { statusUpdateSchema, statusCreateSchema, statusIdSchema } = require('./../utils/schemas/status')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function statusApi (app) {
  const router = express()
  const statusService = new StatusService()

  app.use('/api/status', router)

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const result = await statusService.get()
        res.status(200).json({
          data: result || [],
          message: 'Status listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: statusIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const result = await statusService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'Status retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: statusIdSchema }, 'params'),
    validationHandler(statusUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: status } = req

        const result = await statusService.update(id, status)

        res.status(200).json({
          data: result,
          message: 'Status updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(statusCreateSchema),
    async function (req, res, next) {
      try {
        const { body: status } = req

        const result = await statusService.create(status)

        res.status(201).json({
          data: result,
          message: 'Status created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = statusApi
