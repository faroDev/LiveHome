'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupFiles(config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('files', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fileType: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
