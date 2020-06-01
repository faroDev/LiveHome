
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findAll, update, findById } = require('./../../mocks/dataBaseMock/statusDatabaseMock')

describe('Services - approve user', function () {
  const ApproveUserService = proxyquire('./../../services/approveUser.js', {
    './../../store/index': dataBaseMock
  })

  const approveUserService = new ApproveUserService()

  describe('When get method is called', async function () {
    it('* should call the findAll method', async function () {
      await approveUserService.get()
      assert.strictEqual(findAll.called, true)
    })
  })

  describe('When get getById is called', async function () {
    it('* should call the findById method', async function () {
      await approveUserService.getById(1)
      assert.strictEqual(findById.called, true)
    })
  })

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await approveUserService.create({})
      assert.strictEqual(create.called, true)
    })
  })

  describe('When update method is called', async function () {
    it('* should call the update method', async function () {
      await approveUserService.update(1, {})
      assert.strictEqual(update.called, true)
    })
  })
})
