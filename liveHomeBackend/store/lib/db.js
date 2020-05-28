'use strict'

const Sequelize = require('sequelize')
const config = require('./../../config')

let sequelize = null

module.exports = function setupDataBase (configuration) {
  if (!sequelize) {
    console.log('Init sequelize')

    const options = config.app.env ? { logging: false } : {
      dialect: configuration.dialect,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      returning: true,
      setup: true
    }

    sequelize = new Sequelize({ ...configuration, ...options })
  }
  return sequelize
}
