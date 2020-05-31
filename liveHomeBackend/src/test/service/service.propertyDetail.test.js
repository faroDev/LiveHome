
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - property detail', function () {
  const PropertyDetail = proxyquire('./../../services/propertyDetail.js', {
    './../../store/index': dataBaseMock
  })

  const propertyDetail = new PropertyDetail()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await propertyDetail.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When getById is called', async function () {
    it('* should call the findById method', async function () {
      await propertyDetail.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When create method is called', async function () {
    it('* should call the create method', async function () {
      await propertyDetail.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await propertyDetail.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })
})
