const assert = require('assert')
const proxyquire = require('proxyquire')
const jwt = require('jsonwebtoken')
const testServer = require('./../../utils/testService')
const {
  modalityTypes,
  modalityTypeToCreate,
  ModalityTypeServiceMock,
  modalityTypeFilter,
  modalityTypeToUpdate,
  modalityTypeUpdated,
  modalityTypeCreated
} = require('./../../mocks/test/modalityType')
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

const route = proxyquire('./../../routes/modalityType', {
  './../services/modalityType': ModalityTypeServiceMock,
  passport: PassportMock
})

const request = testServer(route)
const token = generateToken()

describe('Routes - modality types', function () {
  // Get method test
  describe('Get /modalityType/', function () {
    it('* Should response with status 200', function (done) {
      request.get('/api/modalityType')
        .expect(200, done)
    })

    it('* Should response with list of modality types', function (done) {
      request.get('/api/modalityType')
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: modalityTypes,
            message: 'Modalities type listed'
          }, done())
        })
    })
  })

  describe('Get /modalityType/:id', function () {
    it('* Should response with status 200', function (done) {
      request.get(`/api/modalityType/${modalityTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with modality type object', function (done) {
      request.get(`/api/modalityType/${modalityTypeId}`)
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: modalityTypeFilter,
            message: 'Modality type retrieved'
          }, done())
        })
    })
  })

  // Put method test
  describe('Put /modalityType/', function () {
    it('* Should response with status 200', function (done) {
      request.put(`/api/modalityType/${modalityTypeId}`)
        .send(modalityTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status 200 and object updated', function (done) {
      request.put(`/api/modalityType/${modalityTypeId}`)
        .send(modalityTypeToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: modalityTypeUpdated,
            message: 'Modality type updated'
          })
        }, done())
    })
  })

  // Post method test
  describe('Post /modalityType/', function () {
    it('* Should response with status 201', function (done) {
      request.post('/api/modalityType/')
        .send(modalityTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(201, done)
    })

    it('* Should response with status 201 and object created', function (done) {
      request.post('/api/modalityType/')
        .send(modalityTypeToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: modalityTypeCreated,
            message: 'Modality type created'
          })
        }, done())
    })
  })
})
