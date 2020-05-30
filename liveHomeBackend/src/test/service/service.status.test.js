
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - status', function () {
  const StatusService = proxyquire('./../../services/status.js', {
    './../../store/index': dataBaseMock
  })

  const statusService = new StatusService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await statusService.get()
      assert.strictEqual(findAll.called, true)
    })

    it('* should call the findById method', async function () {
      await statusService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await statusService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await statusService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })
})
