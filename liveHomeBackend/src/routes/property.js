'use strict'

const express = require('express')
const Multer = require('multer')
const PropertyService = require('./../services/property')
const FileService = require('./../services/file')

var upload = Multer({ dest: './uploads' })

function propertyApi (app) {
  const router = express()
  const propertyService = new PropertyService()
  const fileService = new FileService()

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

  router.post('/', upload.array('photos', 6), async function (req, res, next) {
    try {
      const { body: property, files } = req

      const newProperty = await propertyService.create(property)

      const filesPromises = files.map(file => {
        const newFile = {
          url: file.originalname,
          fileType: file.mimetype,
          propertyId: newProperty.id
        }

        return fileService.create(newFile)
      })

      await Promise.all(filesPromises)

      res.status(201).json({
        data: newProperty || {},
        message: 'Property  created'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id/dashboard', async function (req, res, next) {
    try {
      res.status(200).json({
        data: {
          favorites: 20,
          visitors: 200,
          graph: [
            {
              date: '2020-05-10',
              count: 2
            },
            {
              date: '2020-05-11',
              count: 3
            },
            {
              date: '2020-05-12',
              count: 5
            },
            {
              date: '2020-05-13',
              count: 6
            },
            {
              date: '2020-05-14',
              count: 7
            }
          ]
        },
        message: 'Property dashboard retrieved'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = propertyApi
