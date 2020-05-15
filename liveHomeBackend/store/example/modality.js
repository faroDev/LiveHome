'use strict'
const config = require('../config/index')
const db = require('../index')

async function run() {
  const configuration = {
    database: config.db.name || 'livehome_db',
    username: config.db.user || 'admin',
    password: config.db.password || 'admin123',
    host: config.db.host || 'localhost',
    dialect: 'postgres',
    returning: true,
    setup: true
  }

  const { modality } = await db(configuration).catch(handleFatalError)

  const modalityC = await modality.update({
    id: 2,
    pricem2: 0,
    pricePerMoth: 900000,
    totalPrice: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    propertyId: 1,
    modalTypeId: 2
  }, 1, 2).catch(handleFatalError)

  console.log('---modalityC--')
  console.log(modalityC)

  const modalities = await modality.findAll()
  console.log('--modalities--')
  console.log(modalities)

  const modality1 = await modality.findById(1)
  console.log('--AllPropertiesDetails--')
  console.log(modality1)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
