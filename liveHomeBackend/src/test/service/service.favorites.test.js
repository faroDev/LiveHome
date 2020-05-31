
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById, getAmountByQuery, deleteByPropertyIdAndUserId, getPropertiesByIds, findAllByUserId, deleteById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - favorites', function () {
  const FavoriteService = proxyquire('./../../services/favorite.js', {
    './../../store/index': dataBaseMock
  })

  const favoriteService = new FavoriteService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await favoriteService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById method', async function () {
      await favoriteService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await favoriteService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await favoriteService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })

  describe('When getAmountByUserId method is called', async function () {
    it('* should call the getAmountByQuery method', async function () {
      await favoriteService.getAmountByUserId(1)
      assert.strictEqual(getAmountByQuery.called, true)
    })
  })

  describe('When getAmountByPropertyId method is called', async function () {
    it('* should call the getAmountByQuery method', async function () {
      await favoriteService.getAmountByPropertyId(1)
      assert.strictEqual(getAmountByQuery.called, true)
    })
  })

  describe('When getAllByUserId method is called', async function () {
    it('* should call the findAllByUserId and getPropertiesByIds method', async function () {
      await favoriteService.getAllByUserId(1)
      assert.strictEqual(findAllByUserId.called, true)
      assert.strictEqual(getPropertiesByIds.called, true)
    })
  })

  describe('When deleteByPropertyIdAndUserId method is called', async function () {
    it('* should call the deleteByPropertyIdAndUserId method', async function () {
      await favoriteService.deleteByPropertyIdAndUserId(1,1)
      assert.strictEqual(deleteByPropertyIdAndUserId.called, true)
    })
  })

  describe('When delete method is called', async function () {
    it('* should call the deleteById method', async function () {
      await favoriteService.delete(1)
      assert.strictEqual(deleteById.called, true)
    })
  })
})
