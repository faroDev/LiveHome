'use strict'
const status = require('./dataBaseMock/statusDatabaseMock')
module.exports = async function (config) {
  return {
    status
  }
}
