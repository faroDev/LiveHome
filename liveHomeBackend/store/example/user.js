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

  const { user } = await db(configuration).catch(handleFatalError)

  const user1 = await user.create({
    name: 'pedro',
    lastName: 'perez',
    secondLastName: 'alvarez',
    status: 'false',
    createAt: new Date(),
    updateAt: new Date(),
    authId: 1,
    typeUserId: 1
  }).catch(handleFatalError)

  console.log('--userType--')
  console.log(user1)

  // const typeUser3 = await typeUser.createOrUpdate({
  //   id: '3',
  //   name: 'cliente',
  //   description: 'el cliente',
  //   createAt: new Date(),
  //   updateAt: new Date(),
  // }).catch(handleFatalError)
  // console.log('--userType--')
  // console.log(typeUser3)

  const users = await user.findAll()
  console.log('--userss--')
  console.log(users)

  const user2 = await user.findById(1)
  console.log('--user--')
  console.log(user2)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
