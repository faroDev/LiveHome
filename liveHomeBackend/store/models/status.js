'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupStatus(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('status', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    name: {
      type: Sequelize.STRING,
      defaultValue: 'pending'
    }
  })
}
