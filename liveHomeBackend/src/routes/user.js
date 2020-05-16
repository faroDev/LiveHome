'use strict'
const express = require('express')
const UserService = require('./../services/user')

function userApi (app) {
  const router = express()
  const userService = new UserService()

  app.use('/api/users', router)

  router.get('/', async function (req, res, next) {
    try {
      const users = await userService.get()

      res.status(200).json({
        data: users || [],
        message: 'Users listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async function (req, res, next) {
    try {
      const { id } = req.params

      const user = await userService.getById(id)

      res.status(200).json({
        data: user || {},
        message: 'User retrieved'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:id', async function (req, res, next) {
    try {
      const { id } = req.params
      const { body: user } = req

      const userUpdated = await userService.update(id, user)

      res.status(200).json({
        data: userUpdated,
        message: 'User updated'
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async function (req, res, next) {
    try {
      const { body: user } = req

      const userCreated = await userService.create(user)

      res.status(201).json({
        data: userCreated,
        message: 'User created'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id/dashboard', async function (req, res, next) {
    try {
      res.status(200).json({
        data: {
          offers: 10,
          visitors: 2000,
          favorites: 40,
          properties: [
            {
              name: 'Casa',
              date: '2020-05-15',
              image: 'url'
            },
            {
              name: 'Casa',
              date: '2020-05-15',
              image: 'url'
            },
            {
              name: 'Casa',
              date: '2020-05-15',
              image: 'url'
            }
          ]
        },
        message: 'User dashboard retrieved'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = userApi
