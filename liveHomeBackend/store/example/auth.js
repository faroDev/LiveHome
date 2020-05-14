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

  const { auth } = await db(configuration).catch(handleFatalError)

  const auth1 = await auth.createOrUpdate({

    email: 'jose luis',
    password: '123',
    userName: 'jl'
  }).catch(handleFatalError)

  console.log('--Auth-')
  console.log(auth1)

  const auths = await auth.findAll()
  console.log('--auths--')
  console.log(auths)

  const auth01 = await auth.findById(1)
  console.log('--auth--')
  console.log(auth01)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
