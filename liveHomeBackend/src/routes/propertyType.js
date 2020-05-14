'use strict'

const express = require('express')
const PropertyTypeService = require('./../services/propertyType')

function propertyTypeApi (app) {
  const router = express()
  const propertyTypeService = new PropertyTypeService()

  app.use('/api/propertyType', router)

  router.get('/', async function (req, res, next) {
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

  router.get('/:id', async function (req, res, next) {
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

  router.put('/:id', async function (req, res, next) {
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

  router.post('/', async function (req, res, next) {
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
