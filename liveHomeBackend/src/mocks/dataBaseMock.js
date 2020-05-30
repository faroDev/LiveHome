'use strict'
const status = require('./dataBaseMock/statusDatabaseMock')
const zones = require('./dataBaseMock/statusDatabaseMock')
const modalityType = require('./dataBaseMock/statusDatabaseMock')
module.exports = async function (config) {
  return {
    status,
    zones,
    modalityType
  }
}
