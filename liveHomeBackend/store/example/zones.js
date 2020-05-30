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

  const { zones } = await db(configuration).catch(handleFatalError)

  const zones1 = await zones.create({
    name: 'Santa Fe'
  }).catch(handleFatalError)

  console.log('--zones1--')
  console.log(zones1)

  const allZones = await zones.findAll()
  console.log('--allZones--')
  console.log(allZones)

  const zonesId = await zones.findById(1)
  console.log('--zonesId--')
  console.log(zonesId)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
