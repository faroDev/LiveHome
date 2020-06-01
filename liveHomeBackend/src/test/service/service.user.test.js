
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById, propertyUser } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - user', function () {
  const UserService = proxyquire('./../../services/user.js', {
    './../../store/index': dataBaseMock
  })

  const userService = new UserService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await userService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When getById is called', async function () {
    it('* should call the findById method', async function () {
      await userService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When create method is called', async function () {
    it('* should call the create method', async function () {
      await userService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await userService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })

  describe('When findPropertiesByUserId method is called', async function () {
    it('* should call the propertyUser method', async function () {
      await userService.findPropertiesByUserId(1)
      assert.strictEqual(propertyUser.called, true)
    })
  })
})
