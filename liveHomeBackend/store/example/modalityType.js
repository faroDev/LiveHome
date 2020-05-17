'use strict'
const config = require('../config/index')
const db = require('../index')

async function run () {
  const configuration = {
    database: config.db.name || 'livehome_db',
    username: config.db.user || 'admin',
    password: config.db.password || 'admin123',
    host: config.db.host || 'localhost',
    dialect: 'postgres',
    returning: true,
    setup: true
  }

  const { modalityType } = await db(configuration).catch(handleFatalError)

  const modalityType1 = await modalityType.create({
    name: 'Venta',
    createdAt: new Date(),
    updatedAt: new Date()
  }).catch(handleFatalError)

  console.log('-PropertyDetails--')
  console.log(modalityType1)

  const propertyDetails = await modalityType.findAll()
  console.log('--PropertyDetail--')
  console.log(propertyDetails)

  const propertyDetailF = await modalityType.findById(1)
  console.log('--AllPropertiesDetails--')
  console.log(propertyDetailF)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
