'use strict'
const config = require('../config/index')
const db = require('../index')

async function run() {
  const configuration = {
    database: config.db.name,
    username: config.db.user,
    password: config.db.password,
    host: config.db.host,
    dialect: 'postgres',
    returning: true,
    setup: true
  }

  const { propertyType } = await db(configuration).catch(handleFatalError)

  const propertyType1 = await propertyType.update({
    id: 3,
    name: 'Casa',
    createdAt: new Date(),
    updatedAt: new Date()
  }).catch(handleFatalError)

  console.log('--userType4--')
  console.log(propertyType1)

  const propertyTypes = await propertyType.findAll()
  console.log('--user--')
  console.log(propertyTypes)

  const propertyType2 = await propertyType.findById(1)
  console.log('--user--')
  console.log(propertyType2)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
