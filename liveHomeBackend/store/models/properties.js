'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProperties (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('properties', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
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
      type: Sequelize.INTEGER,
      allowNull: true
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
    bathrooms: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    rooms: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    heating: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    cellar: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    nearTo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    available: {
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
