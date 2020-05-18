'use strict'

const express = require('express')
const PropertyDetailService = require('./../services/propertyDetail')
const validationHandler = require('./../utils/middleware/validationHandler')
const { propertyDetailIdSchema, propertyDetailCreateSchema, propertyDetailUpdateSchema } = require('./../utils/schemas/propertyDetail')
const passport = require('passport')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function propertyDetailApi (app) {
  const router = express()
  const propertyDetailService = new PropertyDetailService()

  app.use('/api/propertyDetail', router)

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      try {
        const result = await propertyDetailService.get()

        res.status(200).json({
          data: result || [],
          message: 'Property details listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: propertyDetailIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const result = await propertyDetailService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'Property detail retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ id: propertyDetailIdSchema }, 'params'),
    validationHandler(propertyDetailUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: propertyDetail } = req

        const result = await propertyDetailService.update(id, propertyDetail)

        res.status(200).json({
          data: result,
          message: 'Property detail updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(propertyDetailCreateSchema),
    async function (req, res, next) {
      try {
        const { body: propertyDetail } = req
        console.log(propertyDetail)

        const result = await propertyDetailService.create(propertyDetail)

        res.status(201).json({
          data: result,
          message: 'Property detail created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = propertyDetailApi
