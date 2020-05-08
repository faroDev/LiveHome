'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAprove_user (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('aprove_user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    date: {
      type: Sequelize.TIME,
      allowNull: false
    }
  })
}
