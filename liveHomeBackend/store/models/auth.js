'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAuth (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('auth', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
