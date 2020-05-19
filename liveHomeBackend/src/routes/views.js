'use strict'
const express = require('express')
const ViewsService = require('./../services/views')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function viewApi (app) {
  const router = express()
  const viewsService = new ViewsService()

  app.use('/api/views', router)

  router.get('/',

    async function (req, res, next) {
      try {
        const views = await viewsService.get()

        res.status(200).json({
          data: views || [],
          message: 'Views listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params

        const view = await viewsService.getById(id)

        res.status(200).json({
          data: view || {},
          message: 'View retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: view } = req

        const viewUpdated = await viewsService.update(id, view)

        res.status(200).json({
          data: viewUpdated,
          message: 'View updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',

    async function (req, res, next) {
      try {
        const { body: view } = req

        const viewCreated = await viewsService.create(view)

        res.status(201).json({
          data: viewCreated,
          message: 'View created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = viewApi
