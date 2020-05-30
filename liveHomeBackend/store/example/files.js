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

  const { files } = await db(configuration).catch(handleFatalError)

  const filesC = await files.create({

    url: 'https://google.com',
    fileType: 'img',
    createdAt: new Date(),
    updatedAt: new Date(),
    propertyId: 1
  }).catch(handleFatalError)

  console.log('--viewsC--')
  console.log(filesC)

  const filesAll = await files.findAll()
  console.log('--view--')
  console.log(filesAll)

  const files1 = await files.findById(1)
  console.log('--views--')
  console.log(files1)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
