'use strict'
const express = require('express')
const UsersTypeService = require('./../services/usersType')
const validationHandler = require('./../utils/middleware/validationHandler')
const { userTypeUpdateSchema, userTypeCreateSchema, userTypeId } = require('./../utils/schemas/userType')

function usersTypeApi (app) {
  const router = express()
  const usersTypeService = new UsersTypeService()

  app.use('/api/usersType', router)

  router.get('/', async function (req, res, next) {
    try {
      const result = await usersTypeService.get()
      res.status(200).json({
        data: result || [],
        message: 'Users type listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id',
    validationHandler({ id: userTypeId }, 'params'),
    async function (req, res, next) {
      try {
        const { id } = req.params

        const result = await usersTypeService.getById(id)

        res.status(200).json({
          data: result || {},
          message: 'User type retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',
    validationHandler({ id: userTypeId }, 'params'),
    validationHandler(userTypeUpdateSchema),
    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: userType } = req

        const result = await usersTypeService.update(id, userType)

        res.status(200).json({
          data: result,
          message: 'User type updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',
    validationHandler(userTypeCreateSchema),
    async function (req, res, next) {
      try {
        const { body: userType } = req

        const result = await usersTypeService.create(userType)

        res.status(201).json({
          data: result,
          message: 'User type created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = usersTypeApi
