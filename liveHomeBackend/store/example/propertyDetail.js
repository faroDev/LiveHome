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

  const { propertyDetail } = await db(configuration).catch(handleFatalError)

  const propertyDetail1 = await propertyDetail.update({
    id: 2,
    address: 'Calle 24 # 15-16',
    city: 'Envigado',
    urbanization: 'La Vida Es Bella 324',
    neighborhood: 'La zuñiga',
    longitude: 2.32633,
    latitud: -73.55032,
    createdAt: new Date(),
    updatedAt: new Date(),
    propertyId: 1

  }).catch(handleFatalError)

  console.log('-PropertyDetails--')
  console.log(propertyDetail1)

  const propertyDetails = await propertyDetail.findAll()
  console.log('--PropertyDetail--')
  console.log(propertyDetails)

  const propertyDetailF = await propertyDetail.findById(1)
  console.log('--AllPropertiesDetails--')
  console.log(propertyDetailF)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
