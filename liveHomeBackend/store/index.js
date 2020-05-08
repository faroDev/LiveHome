'use strict'

const setupDatabase = require('./lib/db')

const setupType_user = require('./models/type_user')
const setupUser = require('./models/user')
const setupAuth = require('./models/auth')
const setupFavorites = require('./models/favorites')
const setupAprove_user = require('./models/aprove_user')

const setupPropierties = require('./models/properties')
const setupProperty_detail = require('./models/property_detail')
const setupModality = require('./models/modality')
const setupModalityType = require('./models/modality_type')
const setupProperty_type = require('./models/property_type')
const setupFiles = require('./models/files')
const setupViews = require('./models/views')

//services
const setupType_userService = require('./lib/type_user')

module.exports = async function (config) {
  const sequialize = setupDatabase(config)

  const type_userModel = setupType_user(config)
  const userModel = setupUser(config)
  const authModel = setupAuth(config)
  const favoritesModel = setupFavorites(config)
  const aprove_userModel = setupAprove_user(config)
  const propertyModel = setupPropierties(config)
  const property_detailModel = setupProperty_detail(config)
  const modalityModel = setupModality(config)
  const modalityTypeModel = setupModalityType(config)
  const property_typeModel = setupProperty_type(config)
  const filesModel = setupFiles(config)
  const viewsModel = setupViews(config)

  propertyModel.hasOne(property_detailModel)
  propertyModel.hasMany(viewsModel)
  propertyModel.hasMany(filesModel)
  propertyModel.hasMany(modalityModel)
  propertyModel.hasMany(aprove_userModel)
  propertyModel.hasMany(favoritesModel)
  property_typeModel.hasMany(propertyModel)

  propertyModel.belongsTo(property_typeModel)
  modalityTypeModel.hasMany(modalityModel)
  propertyModel.belongsTo(userModel)

  userModel.hasMany(propertyModel)
  userModel.hasMany(aprove_userModel)
  userModel.hasMany(favoritesModel)
  userModel.hasMany(authModel)
  type_userModel.hasMany(userModel)

  await sequialize.authenticate()
  await sequialize.sync()

  const type_user = setupType_userService(type_userModel)

  return {

  }
}
