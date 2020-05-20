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
const setupStatus = require('./models/status')

// services
const setupTypeUserService = require('./lib/services/typeUser')
const setupUserService = require('./lib/services/user')
const setupAuthService = require('./lib/services/auth')
const setupPropertyTypeService = require('./lib/services/properyType')
const setupPropertiesService = require('./lib/services/properties')
const setupViewsService = require('./lib/services/views')
const setupFilesService = require('./lib/services/files')
const setupPropertyDetailService = require('./lib/services/propertuDetail')
const setupModalityTypeService = require('./lib/services/modalityType')
const setupModalityService = require('./lib/services/modality')
const setupAproveUserService = require('./lib/services/aproveUser')
const setupFavoritesService = require('./lib/services/favorites')
const setupStatusService = require('./lib/services/status')

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
  const statusModel = setupStatus(config)

  propertyModel.hasOne(propertyDetailModel)
  propertyModel.hasMany(viewsModel)
  propertyModel.hasMany(filesModel)
  propertyModel.hasMany(modalityModel)
  propertyModel.hasMany(aproveUserModel)
  propertyModel.hasMany(favoritesModel)
  propertyTypeModel.hasMany(propertyModel)

  statusModel.hasMany(propertyModel)
  userModel.hasMany(propertyModel)
  modalityTypeModel.hasMany(modalityModel)

  userModel.hasMany(aproveUserModel)
  userModel.hasMany(favoritesModel)
  userModel.hasMany(viewsModel)
  authModel.hasOne(userModel)
  typeUserModel.hasMany(userModel)

  await sequialize.authenticate()
  await sequialize.sync({ force: true })

  const typeUser = setupTypeUserService(typeUserModel)
  const user = setupUserService(userModel, propertyModel, viewsModel)
  const auth = setupAuthService(authModel)
  const propertyType = setupPropertyTypeService(propertyTypeModel)
  const properties = setupPropertiesService(propertyModel)
  const views = setupViewsService(viewsModel)
  const files = setupFilesService(filesModel)
  const propertyDetail = setupPropertyDetailService(propertyDetailModel)
  const modalityType = setupModalityTypeService(modalityTypeModel)
  const modality = setupModalityService(modalityModel)
  const approveUser = setupAproveUserService(aproveUserModel)
  const favorites = setupFavoritesService(favoritesModel)
  const status = setupStatusService(statusModel)

  return {
    typeUser,
    user,
    auth,
    propertyType,
    properties,
    views,
    files,
    propertyDetail,
    modalityType,
    modality,
    approveUser,
    favorites,
    status
  }
}
