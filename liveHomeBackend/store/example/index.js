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
    logging: false
  }

  const { typeUser } = await db(configuration).catch(handleFatalError)

  const typeUser5 = await typeUser.createOrUpdate({
    name: 'vi',
    description: 'el comprador',
    createAt: new Date(),
    updateAt: new Date()
  }).catch(handleFatalError)

  console.log('--userType4--')
  console.log(typeUser5)

  // const typeUser3 = await typeUser.createOrUpdate({
  //   id: '3',
  //   name: 'cliente',
  //   description: 'el cliente',
  //   createAt: new Date(),
  //   updateAt: new Date(),
  // }).catch(handleFatalError)
  // console.log('--userType--')
  // console.log(typeUser3)

  const usersTypes = await typeUser.findAll()
  console.log('--userTypes--')
  console.log(usersTypes)

  const userType = await typeUser.findById(2)
  console.log('--userType--')
  console.log(userType)
}
run()
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
