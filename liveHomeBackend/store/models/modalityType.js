'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupModalityType (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('modal_type', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
