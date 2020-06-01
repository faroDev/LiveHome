const assert = require('assert')
const proxyquire = require('proxyquire')
const jwt = require('jsonwebtoken')
const testServer = require('./../../utils/testService')
const {
  userTypes,
  userTypeToCreate,
  UserTypeServiceMock,
  userTypeFilter,
  userTypeToUpdate,
  userTypeUpdated,
  userTypeCreated
} = require('./../../mocks/test/userType')
const PassportMock = require('./../../mocks/PassportMock')
const config = require('./../../../config')
const userTypeId = 1

function generateToken () {
  const payload = {
    sub: 1,
    userName: 'jl',
    email: 'camposb1990@hotmail.com',
    userType: 'Cliente',
    userId: 1
  }

  return jwt.sign(payload, config.auth.authJwtSecret, { expiresIn: '15m' })
}

const route = proxyquire('./../../routes/usersType', {
  './../services/usersType': UserTypeServiceMock,
  passport: PassportMock
})

const request = testServer(route)
const token = generateToken()

describe('Routes - user types', function () {
  // Get method test
  describe('Get /usersType/', function () {
    it('* Should response with status 200', function (done) {
      request.get('/api/usersType')
        .expect(200, done)
    })

    it('* Should response with list of user types', function (done) {
      request.get('/api/usersType')
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: userTypes,
            message: 'Users type listed'
          }, done())
        })
    })
  })

  describe('Get /usersType/:id', function () {
    it('* Should response with status 200', function (done) {
      request.get(`/api/usersType/${userTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with user type object', function (done) {
      request.get(`/api/usersType/${userTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: userTypeFilter,
            message: 'User type retrieved'
          }, done())
        })
    })
  })

  // Put method test
  describe('Put /usersType/', function () {
    it('* Should response with status 200', function (done) {
      request.put(`/api/usersType/${userTypeId}`)
        .send(userTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status 200 and object updated', function (done) {
      request.put(`/api/usersType/${userTypeId}`)
        .send(userTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: userTypeUpdated,
            message: 'User type updated'
          })
        }, done())
    })
  })

  // Post method test
  describe('Post /usersType/', function () {
    it('* Should response with status 201', function (done) {
      request.post('/api/usersType/')
        .send(userTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(201, done)
    })

    it('* Should response with status 201 and object created', function (done) {
      request.post('/api/usersType/')
        .send(userTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: userTypeCreated,
            message: 'User type created'
          })
        }, done())
    })
  })
})
