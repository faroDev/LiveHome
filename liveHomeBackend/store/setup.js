'use strict'

const config = require('./../config')
const db = require('./index')
const chalk = require('chalk')

async function setup () {
  const configuration = {
    database: config.db.database,
    username: config.db.username,
    password: config.db.password,
    host: config.db.host,
    returning: true,
    dialect: config.db.dialect,
    setup: true,
    loggin: false
  }
  console.log(config.db.database)
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
