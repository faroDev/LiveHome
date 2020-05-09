'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupFavorites (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('favorites', {
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