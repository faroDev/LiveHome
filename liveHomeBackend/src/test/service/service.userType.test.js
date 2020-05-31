
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - user type', function () {
  const UserTypeService = proxyquire('./../../services/usersType.js', {
    './../../store/index': dataBaseMock
  })

  const userTypeService = new UserTypeService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await userTypeService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById method', async function () {
      await userTypeService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await userTypeService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await userTypeService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })
})
