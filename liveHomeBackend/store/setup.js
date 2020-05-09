'use strict'
const debug = require('debug')('livehome_db:setup')
const db = require('./index')
const config = require('./config/index')
const chalk = require('chalk')

async function setup () {
  const configuration = {
    database: config.db.name || 'livehome_db',
    username: config.db.user || 'admin',
    password: config.db.password || 'admin123',
    host: config.db.host || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(configuration).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
