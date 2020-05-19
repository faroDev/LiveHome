'use strict'
const express = require('express')
const FileService = require('./../services/file')
const validationHandler = require('./../utils/middleware/validationHandler')
const { fileIdSchema, fileCreateSchema, fileUpdateSchema } = require('./../utils/schemas/file')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function fileApi (app) {
  const router = express()
  const fileService = new FileService()

  app.use('/api/files', router)

  router.get('/',
    async function (req, res, next) {
      try {
        const files = await fileService.get()

        res.status(200).json({
          data: files || [],
          message: 'Files listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',
    validationHandler({ id: fileIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const file = await fileService.getById(id)

        res.status(200).json({
          data: file || {},
          message: 'File retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    validationHandler({ id: fileIdSchema }, 'params'),
    validationHandler(fileUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: file } = req

        const fileUpdated = await fileService.update(id, file)

        res.status(200).json({
          data: fileUpdated,
          message: 'File updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    validationHandler(fileCreateSchema),
    async function (req, res, next) {
      try {
        const { body: file } = req

        const fileCreated = await fileService.create(file)

        res.status(201).json({
          data: fileCreated,
          message: 'File created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = fileApi
