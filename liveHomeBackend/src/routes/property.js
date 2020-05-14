'use strict'

const express = require('express')
const PropertyService = require('./../services/property')

function propertyApi (app) {
  const router = express()
  const propertyService = new PropertyService()

  app.use('/api/properties', router)

  router.get('/', async function (req, res, next) {
    try {
      const result = await propertyService.get()

      res.status(200).json({
        data: result || [],
        message: 'Properties  listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async function (req, res, next) {
    try {
      const { id } = req.params
      const result = await propertyService.getById(id)

      res.status(200).json({
        data: result || {},
        message: 'Property  retrieved'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:id', async function (req, res, next) {
    try {
      const { id } = req.params
      const { body: property } = req

      const result = await propertyService.update(id, property)

      res.status(200).json({
        data: result,
        message: 'Property  updated'
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async function (req, res, next) {
    try {
      const { body: property } = req

      const result = await propertyService.create(property)

      res.status(201).json({
        data: result,
        message: 'Property  created'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = propertyApi
