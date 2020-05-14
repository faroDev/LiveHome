'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProperties(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('properties', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    m2: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    m2build: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    furnished: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    parking: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    pool: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    security: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    elevator: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    approved: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    bathrooms: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nearTo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    avalible: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    downAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  })
}
