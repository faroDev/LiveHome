'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAuth(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('auth', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
