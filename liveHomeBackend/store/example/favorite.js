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

  const { favorites } = await db(configuration).catch(handleFatalError)

  const favoritesC = await favorites.create({
    date: '2020-05-06',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 1, 1).catch(handleFatalError)

  console.log('---favoritesC--')
  console.log(favoritesC)

  const favoritesAll = await favorites.findAll()
  console.log('--favoritesAll--')
  console.log(favoritesAll)

  const favorites1 = await favorites.findById(1)
  console.log('--AllPropertiesDetails--')
  console.log(favorites1)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
