
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - file', function () {
  const FileService = proxyquire('./../../services/file.js', {
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
    it('* should call the findById method', async function () {
      await fileService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
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
})
