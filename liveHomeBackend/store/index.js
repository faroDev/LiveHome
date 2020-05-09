'use strict'

const setupDatabase = require('./lib/db')

const setupTypeUser = require('./models/typeUser')
const setupUser = require('./models/user')
const setupAuth = require('./models/auth')
const setupFavorites = require('./models/favorites')
const setupAproveUser = require('./models/aproveUser')

const setupPropierties = require('./models/properties')
const setupPropertyDetail = require('./models/propertyDetail')
const setupModality = require('./models/modality')
const setupModalityType = require('./models/modalityType')
const setupPropertyType = require('./models/propertyType')
const setupFiles = require('./models/files')
const setupViews = require('./models/views')

// services
const setupTypeUserService = require('./lib/typeUser')

module.exports = async function (config) {
  const sequialize = setupDatabase(config)

  const typeUserModel = setupTypeUser(config)
  const userModel = setupUser(config)
  const authModel = setupAuth(config)
  const favoritesModel = setupFavorites(config)
  const aproveUserModel = setupAproveUser(config)
  const propertyModel = setupPropierties(config)
  const propertyDetailModel = setupPropertyDetail(config)
  const modalityModel = setupModality(config)
  const modalityTypeModel = setupModalityType(config)
  const propertyTypeModel = setupPropertyType(config)
  const filesModel = setupFiles(config)
  const viewsModel = setupViews(config)

  propertyModel.hasOne(propertyDetailModel)
  propertyModel.hasMany(viewsModel)
  propertyModel.hasMany(filesModel)
  propertyModel.hasMany(modalityModel)
  propertyModel.hasMany(aproveUserModel)
  propertyModel.hasMany(favoritesModel)
  propertyTypeModel.hasMany(propertyModel)

  modalityTypeModel.hasMany(modalityModel)

  userModel.hasMany(propertyModel)
  userModel.hasMany(aproveUserModel)
  userModel.hasMany(favoritesModel)
  userModel.hasMany(authModel)
  typeUserModel.hasMany(userModel)

  await sequialize.authenticate()
  await sequialize.sync()

  const typeUser = setupTypeUserService(typeUserModel)

  return {
    typeUser
  }
}
