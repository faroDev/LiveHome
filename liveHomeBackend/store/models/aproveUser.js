'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAproveUser (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('aprove_user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    date: {
      type: Sequelize.TIME,
      allowNull: false
    }
  })
}
