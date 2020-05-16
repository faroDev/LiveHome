'use strict'

const express = require('express')
const PropertyDetailService = require('./../services/propertyDetail')
const validationHandler = require('./../utils/middleware/validationHandler')
const { propertyDetailIdSchema, propertyDetailCreateSchema, propertyDetailUpdateSchema } = require('./../utils/schemas/propertyDetail')

function propertyDetailApi (app) {
  const router = express()
  const propertyDetailService = new PropertyDetailService()

  app.use('/api/propertyDetail', router)

  router.get('/', async function (req, res, next) {
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
