'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDataBase (config) {
  if (!sequelize) {
    console.log('Init sequelize', config)

    const options = {
      dialect: 'postgres',
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
    sequelize = new Sequelize({ ...config, ...options })
  }
  return sequelize
}
