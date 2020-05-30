const assert = require('assert')
const proxyquire = require('proxyquire')
const jwt = require('jsonwebtoken')
const testServer = require('./../../utils/testService')
const { statuses, statusToCreate, StatusServiceMock, statusFilter, statusToUpdate, statusUpdated, statusCreated } = require('./../../mocks/test/statusMock')
const PassportMock = require('./../../mocks/PassportMock')
const config = require('./../../../config')
const idStatus = 1

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

describe('Routes - status', function () {
  const route = proxyquire('./../../routes/status', {
    './../services/status': StatusServiceMock,
    passport: PassportMock
  })

  const request = testServer(route)
  const token = generateToken()

  // Get method test
  describe('Get /status/', function () {
    it('* Should response with status 200', function (done) {
      request.get('/api/status')
        .expect(200, done)
    })

    it('* Should response with list of statuses', function (done) {
      request.get('/api/status')
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: statuses,
            message: 'Status listed'
          }, done())
        })
    })

    it('* Should response with status 200', function (done) {
      request.get(`/api/status/${idStatus}`)
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status', function (done) {
      request.get(`/api/status/${idStatus}`)
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: statusFilter,
            message: 'Status retrieved'
          }, done())
        })
    })
  })

  // Put method test
  describe('Put /status/', function () {
    it('* Should response with status 200', function (done) {
      request.put(`/api/status/${idStatus}`)
        .send(statusToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status 200 and object updated', function (done) {
      request.put(`/api/status/${idStatus}`)
        .send(statusToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: statusUpdated,
            message: 'Status updated'
          })
        }, done())
    })
  })

  // Post method test
  describe('Post /status/', function () {
    it('* Should response with status 201', function (done) {
      request.post('/api/status/')
        .send(statusToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(201, done)
    })

    it('* Should response with status 201 and object created', function (done) {
      request.post('/api/status/')
        .send(statusToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: statusCreated,
            message: 'Status created'
          })
        }, done())
    })
  })
})
