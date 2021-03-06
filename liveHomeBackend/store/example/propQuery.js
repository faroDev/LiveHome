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
    setup: true,
    query: {
      raw: true
    }
  }

  const { properties } = await db(configuration).catch(handleFatalError)

  // const object = {
  //   m2: {
  //     [Op.between]: [60, 800]
  //   },
  //   approved: true,
  //   pool: true
  // // }
  // const queryProp = await properties.findByQuery(object).catch(handleFatalError)

  // const obj1 = {
  //   "min": 60,
  //   "max": 100,
  // }

  // const queryRank = await properties.findByRank(obj1, 'm2build')

  // console.log('queryRank : ', queryRank)

  const userp = await properties.userProperties(3)
  console.log(userp)
  // console.log('--userType4--')
  // console.log(queryProp)
  // const length = queryProp.length
  // console.log('El tamaño es :', length)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
