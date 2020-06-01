'use strict'
const express = require('express')
const ApproveUserService = require('./../services/approveUser')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function approveUserApi (app) {
  const router = express()
  const approveUserService = new ApproveUserService()

  app.use('/api/approveUsers', router)

  router.get('/',

    async function (req, res, next) {
      try {
        const approveUsers = await approveUserService.get()

        res.status(200).json({
          data: approveUsers || [],
          message: 'Approve users listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params

        const approveUser = await approveUserService.getById(id)

        res.status(200).json({
          data: approveUser || {},
          message: 'Approve user retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: approveUser } = req

        const approveUserUpdated = await approveUserService.update(id, approveUser)

        res.status(200).json({
          data: approveUserUpdated,
          message: 'Approve user updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',

    async function (req, res, next) {
      try {
        const { body: approveUser } = req

        const approveUserCreated = await approveUserService.create(approveUser)

        res.status(201).json({
          data: approveUserCreated,
          message: 'Approve user created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = approveUserApi
