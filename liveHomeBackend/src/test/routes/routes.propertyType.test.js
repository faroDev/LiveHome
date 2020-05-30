const assert = require('assert')
const proxyquire = require('proxyquire')
const jwt = require('jsonwebtoken')
const testServer = require('./../../utils/testService')
const {
  propertyTypes,
  propertyTypeToCreate,
  PropertyTypeServiceMock,
  propertyTypeFilter,
  propertyTypeToUpdate,
  propertyTypeUpdated,
  propertyTypeCreated
} = require('./../../mocks/test/propertyType')
const PassportMock = require('./../../mocks/PassportMock')
const config = require('./../../../config')
const modalityTypeId = 1

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

const route = proxyquire('./../../routes/propertyType', {
  './../services/propertyType': PropertyTypeServiceMock,
  passport: PassportMock
})

const request = testServer(route)
const token = generateToken()

describe('Routes - property types', function () {
  // Get method test
  describe('Get /propertyType/', function () {
    it('* Should response with status 200', function (done) {
      request.get('/api/propertyType')
        .expect(200, done)
    })

    it('* Should response with list of property types', function (done) {
      request.get('/api/propertyType')
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: propertyTypes,
            message: 'Properties type listed'
          }, done())
        })
    })
  })

  describe('Get /propertyType/:id', function () {
    it('* Should response with status 200', function (done) {
      request.get(`/api/propertyType/${modalityTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with modality type object', function (done) {
      request.get(`/api/propertyType/${modalityTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: propertyTypeFilter,
            message: 'Property type retrieved'
          }, done())
        })
    })
  })

  // Put method test
  describe('Put /propertyType/', function () {
    it('* Should response with status 200', function (done) {
      request.put(`/api/propertyType/${modalityTypeId}`)
        .send(propertyTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status 200 and object updated', function (done) {
      request.put(`/api/propertyType/${modalityTypeId}`)
        .send(propertyTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: propertyTypeUpdated,
            message: 'Property type updated'
          })
        }, done())
    })
  })

  // Post method test
  describe('Post /propertyType/', function () {
    it('* Should response with status 201', function (done) {
      request.post('/api/propertyType/')
        .send(propertyTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(201, done)
    })

    it('* Should response with status 201 and object created', function (done) {
      request.post('/api/propertyType/')
        .send(propertyTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: propertyTypeCreated,
            message: 'Property type created'
          })
        }, done())
    })
  })
})
