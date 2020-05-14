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

  const { properties } = await db(configuration).catch(handleFatalError)

  const property1 = await properties.create({
    m2: 82.5,
    m2build: 78.3,
    furnished: false,
    parking: true,
    pool: true,
    security: true,
    elevator: true,
    approved: true,
    bathrooms: 3,
    nearTo: 'Estación del metro Madera',
    avalible: true,
    downAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    propertyTypeId: 1,
    userId: 1
  }).catch(handleFatalError)

  console.log('--userType4--')
  console.log(property1)

  // const typeUser3 = await typeUser.createOrUpdate({
  //   id: '3',
  //   name: 'cliente',
  //   description: 'el cliente',
  //   createAt: new Date(),
  //   updateAt: new Date(),
  // }).catch(handleFatalError)
  // console.log('--userType--')
  // console.log(typeUser3)

  const properties1 = await properties.findAll()
  console.log('--user--')
  console.log(properties1)

  const property2 = await properties.findById(1)
  console.log('--user--')
  console.log(property2)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
