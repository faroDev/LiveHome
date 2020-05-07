'use strict'

const setupDatabase = require('./lib/db')

const setupType_user = require('./models/type_user')
const setupUser = require('./models/user')
const setupAuth = require('./models/auth')
const setupFavorites = require('./models/favorites')
const setupAprove_user = require('./models/favorites')

const setupPropierties = require('./models/properties')
const setupProperty_detail = require('./models/property_detail')
const setupModality = require('./models/modality')
const setupModalityType = require('./models/modality_type')
const setupProperty_type = require('./models/property_type')
const setupFiles = require('./models/files')
const setupViews = require('./models/views')

const setupProperty = require('./lib/property')

module.exports = async function (config) {
  const sequialize = setupDatabase(config)

  const setupType_userModel = setupType_user(config)
  const setupUserModel = setupUser(config)
  const setupAuthModel = setupAuth(config)
  const setupFavoritesModel = setupFavorites(config)
  const setupAprove_userModel = setupAprove_user(config)

  const propertyModel = setupPropierties(config)
  const property_detailModel = setupProperty_detail(config)
  const setupModalityModel = setupModality(config)
  const setupModalityTypeModel = setupModalityType(config)
  const setupProperty_typeModel = setupProperty_type(config)
  const setupFilesModel = setupFiles(config)
  const setupViewsModel = setupViews(config)

  propertyModel.hasOne(property_detailModel)
  propertyModel.hasMany(setupViewsModel)
  propertyModel.hasMany(setupFilesModel)
  propertyModel.hasMany(setupModalityModel)

  setupProperty_typeModel.hasMany(propertyModel)
  // revisar relacion
  propertyModel.belongsTo(setupProperty_typeModel)
  setupModalityTypeModel.hasMany(setupModalityModel)

  propertyModel.hasMany(setupAprove_userModel)
  propertyModel.hasMany(setupFavoritesModel)
  // revisar relacion
  propertyModel.belongsTo(setupUserModel)

  setupUserModel.hasMany(propertyModel)
  setupUserModel.hasMany(setupAprove_userModel)
  setupUserModel.hasMany(setupFavoritesModel)
  setupUserModel.hasMany(setupAuthModel)
  setupType_userModel.hasMany(setupUserModel)

  await sequialize.authenticate()

  // Actualizar la db esto se deberia de borrar solo crear y mantener

  await sequialize.sync({ force: true })

  const property = SetupProperty(propertyModel)
  const property_detail = {}

  return {
    property,
    property_detail
  }
}
