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

  const { views } = await db(configuration).catch(handleFatalError)

  // const viewsC = await views.update({
  //   id: 1,
  //   date: new Date(),
  //   counter: 1,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   propertyId: 1
  // }).catch(handleFatalError)

  // console.log('--viewsC--')
  // console.log(viewsC)

  const view1 = await views.findAll()
  console.log('--view--')
  console.log(view1)

  const views2 = await views.findById(1)
  console.log('--views--')
  console.log(views2)

  const viewsByProperty = await views.viewsBypropId(3)
  console.log('--viewsByProperty--')
  console.log(viewsByProperty)
  console.log('El numero de vicitas de la propiedad 3 :', viewsByProperty.length)
}
run()
function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
