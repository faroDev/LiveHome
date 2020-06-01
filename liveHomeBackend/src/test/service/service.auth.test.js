
'use strict'
const assert = require('assert')
const proxyquire = require('proxyquire')

const dataBaseMock = require('./../../mocks/dataBaseMock')
const { create, findByEmail } = require('./../../mocks/dataBaseMock/statusDatabaseMock')
const password = 'lsDncjsWsaTGBed'
const email = 'bautistaj20@otlook.com'

describe('Services - auth', function () {
  const AuthService = proxyquire('./../../services/auth.js', {
    './../../store/index': dataBaseMock
  })

  const authService = new AuthService()

  describe('When post method is called', async function () {
    it('* should call the create method', async function () {
      await authService.create({ password })
      assert.strictEqual(create.called, true)
    })
  })

  describe('When get findByEmail method is called', async function () {
    it('* should call the findByEmail method', async function () {
      await authService.findByEmail(email)
      assert.strictEqual(findByEmail.called, true)
    })
  })
})
