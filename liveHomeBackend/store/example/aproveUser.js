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

  const { aproveUser } = await db(configuration).catch(handleFatalError)

  const aproveUserC = await aproveUser.create({
    date: '2020-05-06',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 1, 1).catch(handleFatalError)

  console.log('---aproveUserC--')
  console.log(aproveUserC)

  const favoritesAll = await aproveUser.findAll()
  console.log('--aproveUserAll--')
  console.log(favoritesAll)

  const aproveUser1 = await aproveUser.findById(1)
  console.log('--AllPropertiesDetails--')
  console.log(aproveUser1)
}
run()
function handleFatalError(err) {
  s
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
