'use strict'

const express = require('express')
const Multer = require('multer')
const joi = require('@hapi/joi')
const boom = require('@hapi/boom')
const { Storage } = require('@google-cloud/storage')
const PropertyService = require('./../services/property')
const FileService = require('./../services/file')
const config = require('./../../config')
const validationHandler = require('./../utils/middleware/validationHandler')
const { propertyIdSchema, propertyUpdateSchema, propertyCreateSchema, propertyQuerySchema } = require('./../utils/schemas/property')
const { uploadImageToStorage } = require('./../utils/files')

// jwt strategy
require('./../utils/auth/strategies/jwt')

var googleStorageConfig = {
  projectId: config.googleStorage.projectId,
  keyFilename: './config/store.json'
}

const storage = new Storage(googleStorageConfig)
const bucket = storage.bucket(config.googleStorage.bucketName)

var upload = Multer(config.multer)

function propertyApi (app) {
  const router = express()
  const propertyService = new PropertyService()
  const fileService = new FileService()

  app.use('/api/properties', router)

  router.get('/',
    validationHandler(propertyQuerySchema, 'query'),
    async function (req, res, next) {
      try {
        const { query } = req

        const result = await propertyService.get(query)

        res.status(200).json({
          data: result || [],
          message: 'Properties  listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',

    validationHandler({ id: propertyIdSchema }, 'params'),
    async function (req, res, next) {
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

  router.put('/:id',

    validationHandler({ id: propertyIdSchema }, 'params'),
    validationHandler(propertyUpdateSchema),
    async function (req, res, next) {
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

  router.post('/',
    upload.array('photos', 6), async function (req, res, next) {
      try {
        const { body: property, files } = req

        // to fix
        const { error } = joi.object(propertyCreateSchema).validate(property)
        if (error) {
          next(boom.badRequest(error))
        }

        const newProperty = await propertyService.create(property)

        const promisesToUploadFiles = files.map(file => {
          return uploadImageToStorage(file, bucket)
        })

        const imagesUploaded = await Promise.all(promisesToUploadFiles)

        const filesPromises = imagesUploaded.map(imgUploaded => {
          const newFile = {
            url: imgUploaded.url,
            fileType: imgUploaded.mimeType,
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

  router.get('/:id/dashboard',

    validationHandler({ id: propertyIdSchema }, 'params'),
    async function (req, res, next) {
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
