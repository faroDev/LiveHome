const { expect } = require('chai')

// const userMocks = require('../../mocks/user')

const {
  // dataTypes,
  // checkModelName,
  // checkUniqueIndex,
  // makeMockModels,
  listModels,
  checkPropertyExists
} = require('sequelize-test-helpers')

const aproveUserModel = require('../models/aproveUser')
const authModel = require('../models/auth')
const favoritesModel = require('../models/favorites')
const filesModel = require('../models/files')
const modalityModel = require('../models/modality')
const modalityTypeModel = require('../models/modalityType')
const propertiesModel = require('../models/properties')
const propertyDetailModel = require('../models/propertyDetail')
const propertyTypeModel = require('../models/propertyType')
const statusModel = require('../models/status')
const typeUserModel = require('../models/typeUser')
const UserModel = require('../models/user')
const viewsModel = require('../models/views')
const zonesModel = require('../models/zones')

const config = {
  database: 'livehome_db',
  username: 'admin',
  password: 'admin123',
  host: 'localhost',
  dialect: 'postgres'
  // query: {
  //   raw: true
  // }
}

describe('store/models/user', () => {
  it('The number of tables of the schema sould be 14', function () {
    const result = listModels('store/models', '.js')
    const tables =
      ['aproveUser',
        'auth',
        'favorites',
        'files',
        'modality',
        'modalityType',
        'properties',
        'propertyDetail',
        'propertyType',
        'status',
        'typeUser',
        'user',
        'views',
        'zones']
    expect(result).to.deep.equal(tables)
  })

  const AproveUser = aproveUserModel(config)
  const aproveUser = new AproveUser()
  context('aproveUser', () => {
    ;['id', 'available', 'date'].forEach(
      checkPropertyExists(aproveUser)
    )
  })
  const Auth = authModel(config)
  const auth = new Auth()
  context('auth', () => {
    ;['id', 'email', 'password', 'userName'].forEach(
      checkPropertyExists(auth)
    )
  })
  const Favorites = favoritesModel(config)
  const favorites = new Favorites()
  context('favorites', () => {
    ;['id', 'date'].forEach(
      checkPropertyExists(favorites)
    )
  })
  const Files = filesModel(config)
  const files = new Files()
  context('files', () => {
    ;['id', 'url', 'fileType'].forEach(
      checkPropertyExists(files)
    )
  })
  const Modality = modalityModel(config)
  const modality = new Modality()
  context('modality', () => {
    ;['id', 'pricem2', 'pricePerMoth', 'totalPrice'].forEach(
      checkPropertyExists(modality)
    )
  })
  const ModalityType = modalityTypeModel(config)
  const modalityType = new ModalityType()
  context('modalityType', () => {
    ;['id', 'name'].forEach(
      checkPropertyExists(modalityType)
    )
  })
  const Properties = propertiesModel(config)
  const properties = new Properties()
  context('properties', () => {
    ;['id', 'title', 'description', 'm2', 'm2build', 'furnished', 'parking', 'pool', 'security', 'elevator', 'bathrooms', 'rooms', 'heating', 'cellar', 'nearTo', 'available', 'downAt'].forEach(
      checkPropertyExists(properties)
    )
  })
  const PropertyDetail = propertyDetailModel(config)
  const propertyDetail = new PropertyDetail()
  context('propertyDetail', () => {
    ;['id', 'address', 'city', 'urbanization', 'neighborhood', 'longitude', 'latitude'].forEach(
      checkPropertyExists(propertyDetail)
    )
  })
  const PropertyType = propertyTypeModel(config)
  const propertyType = new PropertyType()
  context('propertyType', () => {
    ;['id', 'name'].forEach(
      checkPropertyExists(propertyType)
    )
  })
  const Status = statusModel(config)
  const status = new Status()
  context('status', () => {
    ;['id', 'name'].forEach(
      checkPropertyExists(status)
    )
  })
  const TypeUser = typeUserModel(config)
  const typeUser = new TypeUser()
  context('typeUser', () => {
    ;['id', 'name'].forEach(
      checkPropertyExists(typeUser)
    )
  })
  const User = UserModel(config)
  const user = new User()
  context('user', () => {
    ;['id', 'name', 'lastName', 'secondLastName', 'documentType', 'documentNumber', 'phone', 'status'].forEach(
      checkPropertyExists(user)
    )
  })
  const Views = viewsModel(config)
  const views = new Views()
  context('views', () => {
    ;['id', 'date', 'counter'].forEach(
      checkPropertyExists(views)
    )
  })
  const Zones = zonesModel(config)
  const zones = new Zones()
  context('Zones', () => {
    ;['id', 'name'].forEach(
      checkPropertyExists(zones)
    )
  })
})
