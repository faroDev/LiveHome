'use strict'

const Sequelize = require('sequelize')

let sequelize = null

module.exports = function setupDataBase (configuration) {
  if (!sequelize) {
    console.log('Init sequelize')

    // const options = { logging: false }
    /*
    {
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
*/
    // sequelize = new Sequelize({ ...configuration, ...options })
    sequelize = new Sequelize(configuration)
  }

  return sequelize
}
