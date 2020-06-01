
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById, getAmountByQuery, getDataPerDateByPropertyId } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - views', function () {
  const ViewsService = proxyquire('./../../services/views.js', {
    './../../store/index': dataBaseMock
  })

  const viewsService = new ViewsService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await viewsService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById method', async function () {
      await viewsService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await viewsService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await viewsService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })

  describe('When getByUserId method is called', async function () {
    it('* should call the getAmountByQuery method', async function () {
      await viewsService.getByUserId(1)
      assert.strictEqual(getAmountByQuery.called, true)
    })
  })

  describe('When getAmountByUserId method is called', async function () {
    it('* should call the getAmountByQuery method', async function () {
      await viewsService.getAmountByUserId(1)
      assert.strictEqual(getAmountByQuery.called, true)
    })
  })

  describe('When getAmountByPropertyId method is called', async function () {
    it('* should call the getAmountByQuery method', async function () {
      await viewsService.getAmountByPropertyId(1)
      assert.strictEqual(getAmountByQuery.called, true)
    })
  })

  describe('When getDataPerDateByPropertyId method is called', async function () {
    it('* should call the getDataPerDateByPropertyId method', async function () {
      await viewsService.getDataPerDateByPropertyId(1)
      assert.strictEqual(getDataPerDateByPropertyId.called, true)
    })
  })
})
