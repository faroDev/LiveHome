'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPropertyDetail (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('property_detail', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    urbanization: {
      type: Sequelize.STRING,
      allowNull: true
    },
    neighborhood: {
      type: Sequelize.STRING,
      allowNull: true
    },
    longitude: {
      type: Sequelize.STRING,
      allowNull: false
    },
    latitude: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
