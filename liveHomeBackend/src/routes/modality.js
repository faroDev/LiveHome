'use strict'
const express = require('express')
const ModalityService = require('./../services/modality')
const validationHandler = require('./../utils/middleware/validationHandler')
const { modalityIdSchema, modalityCreateSchema, modalityUpdateSchema } = require('./../utils/schemas/modality')

function modalityApi (app) {
  const router = express()
  const modalityService = new ModalityService()

  app.use('/api/modalities', router)

  router.get('/', async function (req, res, next) {
    try {
      const modalities = await modalityService.get()

      res.status(200).json({
        data: modalities || [],
        message: 'Modalities listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id',
    validationHandler({ id: modalityIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const modality = await modalityService.getById(id)

        res.status(200).json({
          data: modality || {},
          message: 'Modality retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    validationHandler({ id: modalityIdSchema }, 'params'),
    validationHandler(modalityUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: modality } = req

        const modalityUpdated = await modalityService.update(id, modality)

        res.status(200).json({
          data: modalityUpdated,
          message: 'Modality updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    validationHandler(modalityCreateSchema),
    async function (req, res, next) {
      try {
        const { body: modality } = req

        const modalityCreated = await modalityService.create(modality)

        res.status(201).json({
          data: modalityCreated,
          message: 'Modality created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = modalityApi
