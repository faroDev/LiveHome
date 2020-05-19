'use strict'

const express = require('express')
const ModalityTypeService = require('./../services/modalityType')
const validationHandler = require('./../utils/middleware/validationHandler')
const { modalityTypeUpdateSchema, modalityTypeCreateSchema, modalityTypeId } = require('./../utils/schemas/modalityType')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function modalityTypeApi (app) {
  const router = express()
  const modalityTypeService = new ModalityTypeService()

  app.use('/api/modalityType', router)

  router.get('/',

    async function (req, res, next) {
      try {
        const result = await modalityTypeService.get()

        res.status(200).json({
          data: result || [],
          message: 'Modalities type listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',

    validationHandler({ id: modalityTypeId }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const result = await modalityTypeService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'Modality type retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',

    validationHandler({ id: modalityTypeId }, 'params'),
    validationHandler(modalityTypeUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: modalityType } = req

        const result = await modalityTypeService.update(id, modalityType)

        res.status(200).json({
          data: result,
          message: 'Modality type updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',

    validationHandler(modalityTypeCreateSchema),
    async function (req, res, next) {
      try {
        const { body: modalityType } = req

        const result = await modalityTypeService.create(modalityType)

        res.status(201).json({
          data: result,
          message: 'Modality type created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = modalityTypeApi
