
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById, findByIdAndInSession, userProperties, propertiesHomeQuery } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - property', function () {
  const FileService = proxyquire('./../../services/property.js', {
    './../../store/index': dataBaseMock
  })

  const fileService = new FileService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await fileService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById and findByIdAndInSession method', async function () {
      await fileService.getById(1)
      assert.strictEqual(findById.called, true)
      assert.strictEqual(findByIdAndInSession.called, true)
    })
  })

  describe('When create method is called', async function () {
    it('* should call the create method', async function () {
      await fileService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await fileService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })

  describe('When getByUserId method is called', async function () {
    it('* should call the userProperties method', async function () {
      await fileService.getByUserId(1)
      assert.strictEqual(userProperties.called, true)
    })
  })

  describe('When homeQuery method is called', async function () {
    it('* should call the propertiesHomeQuery method', async function () {
      await fileService.homeQuery(1)
      assert.strictEqual(propertiesHomeQuery.called, true)
    })
  })
})
