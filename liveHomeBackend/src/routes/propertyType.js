'use strict'

const express = require('express')
const passport = require('passport')
const PropertyTypeService = require('./../services/propertyType')
const validationHandler = require('./../utils/middleware/validationHandler')
const { propertyTypeUpdateSchema, propertyTypeCreateSchema, propertyTypeId } = require('./../utils/schemas/propertyType')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function propertyTypeApi (app) {
  const router = express()
  const propertyTypeService = new PropertyTypeService()

  app.use('/api/propertyType', router)
  passport.authenticate('jwt', { session: false })
  router.get('/',
  passport.authenticate('jwt',{ session: false }),
    async function (req, res, next) {
      try {
        const result = await propertyTypeService.get()

        res.status(200).json({
          data: result || [],
          message: 'Properties type listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
  passport.authenticate('jwt',{ session: false }),
    validationHandler({ id: propertyTypeId }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const result = await propertyTypeService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'Property type retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
  passport.authenticate('jwt',{ session: false }),
    validationHandler({ id: propertyTypeId }, 'params'),
    validationHandler(propertyTypeUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: propertyType } = req

        const result = await propertyTypeService.update(id, propertyType)

        res.status(200).json({
          data: result,
          message: 'Property type updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
  passport.authenticate('jwt',{ session: false }),
    validationHandler(propertyTypeCreateSchema),
    async function (req, res, next) {
      try {
        const { body: propertyType } = req

        const result = await propertyTypeService.create(propertyType)

        res.status(201).json({
          data: result,
          message: 'Property type created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = propertyTypeApi
