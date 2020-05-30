'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPropertyType (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('property_type', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'client'
    }
  })
}
