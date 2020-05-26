'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDataBase (config) {
  const connectionString = 'postgres://jiaeqcafqfayou:1d4431cbc00ec7ae74cb68c3ba3271813a35b60f11ac9cb65737df01607298e3@ec2-174-129-255-69.compute-1.amazonaws.com:5432/dappc77f3sd74a'
  if (!sequelize) {
    console.log('Init sequelize')
    sequelize = new Sequelize(connectionString, {
      dialect: 'postgres',
      protocol: 'postgres',
      port: 5432,
      host: 'ec2-174-129-255-69.compute-1.amazonaws.com',
      dialectOptions: {
        ssl: true
      }
    })
  }
  return sequelize
}
