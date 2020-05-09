'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupViews (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('views', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    date: {
      type: Sequelize.TIME,
      allowNull: false
    },
    counter: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}
