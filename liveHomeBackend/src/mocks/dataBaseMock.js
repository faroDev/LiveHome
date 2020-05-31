'use strict'
const status = require('./dataBaseMock/statusDatabaseMock')
const zones = require('./dataBaseMock/statusDatabaseMock')
const modalityType = require('./dataBaseMock/statusDatabaseMock')
const propertyType = require('./dataBaseMock/statusDatabaseMock')
const typeUser = require('./dataBaseMock/statusDatabaseMock')
const approveUser = require('./dataBaseMock/statusDatabaseMock')
const auth = require('./dataBaseMock/statusDatabaseMock')
const favorites = require('./dataBaseMock/statusDatabaseMock')
const properties = require('./dataBaseMock/statusDatabaseMock')
const files = require('./dataBaseMock/statusDatabaseMock')
const modality = require('./dataBaseMock/statusDatabaseMock')
const propertyDetail = require('./dataBaseMock/statusDatabaseMock')

module.exports = async function (config) {
  return {
    status,
    zones,
    modalityType,
    propertyType,
    typeUser,
    approveUser,
    auth,
    favorites,
    properties,
    files,
    modality,
    propertyDetail
  }
}
