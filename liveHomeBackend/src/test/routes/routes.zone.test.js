const assert = require('assert')
const proxyquire = require('proxyquire')
const jwt = require('jsonwebtoken')
const testServer = require('./../../utils/testService')
const { zones, zoneToCreate, ZoneServiceMock, zoneFilter, zoneToUpdate, zoneUpdated, zoneCreated } = require('./../../mocks/test/zoneMock')
const PassportMock = require('./../../mocks/PassportMock')
const config = require('./../../../config')
const idZone = 1

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

const route = proxyquire('./../../routes/zone', {
  './../services/zone': ZoneServiceMock,
  passport: PassportMock
})

const request = testServer(route)
const token = generateToken()

describe('Routes - zones', function () {
  
  // Get method test
  describe('Get /zones/', function () {
    it('* Should response with status 200', function (done) {
      request.get('/api/zones')
        .expect(200, done)
    })
    
    it('* Should response with list of zones', function (done) {
      request.get('/api/zones')
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: zones,
            message: 'Zones listed'
          }, done())
        })
    })
  })

  describe('Get /zones/:id', function () {
    it('* Should response with status 200', function (done) {
      request.get(`/api/zones/${idZone}`)
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })
  
    it('* Should response with zone object', function (done) {
      request.get(`/api/zones/${idZone}`)
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          assert.strict.deepEqual(res.body, {
            data: zoneFilter,
            message: 'Zone retrieved'
          }, done())
        })
    })
  })

  // Put method test
  describe('Put /zones/', function () {
    it('* Should response with status 200', function (done) {
      request.put(`/api/zones/${idZone}`)
        .send(zoneToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done)
    })

    it('* Should response with status 200 and object updated', function (done) {
      request.put(`/api/zones/${idZone}`)
        .send(zoneToUpdate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          
          assert.strict.deepEqual(res.body, {
            data: zoneUpdated,
            message: 'Zone updated'
          })
          
        }, done())
    })
  })

  // Post method test
  describe('Post /zones/', function () {
    it('* Should response with status 201', function (done) {
      request.post('/api/zones/')
        .send(zoneToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(201, done)
    })

    it('* Should response with status 201 and object created', function (done) {
      request.post('/api/zones/')
        .send(zoneToCreate)
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }

          assert.strict.deepEqual(res.body, {
            data: zoneCreated,
            message: 'Zone created'
          })
        }, done())
    })
  })
})

