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

  const { status } = await db(configuration).catch(handleFatalError)

  const status1 = await status.update({
    id: 2,
    name: 'denied'
  }).catch(handleFatalError)

  console.log('--userType4--')
  console.log(status1)

  const allStatus = await status.findAll()
  console.log('--allStatus--')
  console.log(allStatus)

  const statusId = await status.findById(1)
  console.log('--statusId--')
  console.log(statusId)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
