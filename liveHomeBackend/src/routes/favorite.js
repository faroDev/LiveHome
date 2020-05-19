'use strict'
const express = require('express')
const FavoriteService = require('./../services/favorite')

// jwt strategy
require('./../utils/auth/strategies/jwt')

function favoriteApi (app) {
  const router = express()
  const favoriteService = new FavoriteService()

  app.use('/api/favorites', router)

  router.get('/',

    async function (req, res, next) {
      try {
        const favorites = await favoriteService.get()

        res.status(200).json({
          data: favorites || [],
          message: 'Favorites listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.get('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params

        const favorite = await favoriteService.getById(id)

        res.status(200).json({
          data: favorite || {},
          message: 'Favorite retrieved'
        })
      } catch (error) {
        next(error)
      }
    })

  router.put('/:id',

    async function (req, res, next) {
      try {
        const { id } = req.params
        const { body: favorite } = req

        const favoriteUpdated = await favoriteService.update(id, favorite)

        res.status(200).json({
          data: favoriteUpdated,
          message: 'Favorite updated'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/',

    async function (req, res, next) {
      try {
        const { body: favorite } = req

        const favoriteCreated = await favoriteService.create(favorite)

        res.status(201).json({
          data: favoriteCreated,
          message: 'Favorite created'
        })
      } catch (error) {
        next(error)
      }
    })
}

module.exports = favoriteApi
