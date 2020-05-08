'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProperty_detail (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('property_detail', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremnent: true,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urbanization: {
      type: Sequelize.STRING,
      allowNull: false
    },
    neighborhood: {
      type: Sequelize.STRING,
      allowNull: false
    },
    longitude: {
      type: Sequelize.STRING,
      allowNull: false
    },
    latitud: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
