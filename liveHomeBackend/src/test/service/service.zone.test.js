
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - zones', function () {
  const ZoneService = proxyquire('./../../services/zone.js', {
    './../../store/index': dataBaseMock
  })

  const zoneService = new ZoneService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await zoneService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById method', async function () {
      await zoneService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await zoneService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await zoneService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })
})
