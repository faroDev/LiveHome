'use strict'
const sinon = require('sinon')
const property = {
  dataValues: {
    id: 1,
    title: 'Casa cuatro',
    description: 'Casa cuatro',
    m2: '100',
    m2build: '1200',
    furnished: false,
    parking: 5,
    pool: false,
    security: true,
    elevator: true,
    bathrooms: 5,
    rooms: 6,
    heating: true,
    cellar: false,
    nearTo: 'Estación del metro Madera',
    available: false,
    downAt: null,
    createdAt: '2020-05-26T02:24:33.081Z',
    updatedAt: '2020-05-30T12:41:20.535Z',
    propertyTypeId: 1,
    statusId: 2,
    zoneId: 2,
    userId: 1,
    files: [],
    modalities: []
  }
}
const create = sinon.stub().resolves({})
const findAll = sinon.stub().resolves([])
const update = sinon.stub().resolves({})
const findById = sinon.stub().resolves({})
const findByIdAndInSession = sinon.stub().resolves(property)
const findByEmail = sinon.stub().resolves([])
const getAmountByQuery = sinon.stub().resolves(0)
const findAllByUserId = sinon.stub().resolves([])
const deleteByPropertyIdAndUserId = sinon.stub().resolves()
const deleteById = sinon.stub().resolves()
const getPropertiesByIds = sinon.stub().resolves([])
const userProperties = sinon.stub().resolves([])
const propertiesHomeQuery = sinon.stub().resolves([property])
const propertyUser = sinon.stub().resolves([])
const findPropertiesByUserId = sinon.stub().resolves([])

module.exports = {
  create,
  findAll,
  update,
  findById,
  findByEmail,
  getAmountByQuery,
  findAllByUserId,
  deleteByPropertyIdAndUserId,
  deleteById,
  getPropertiesByIds,
  findByIdAndInSession,
  userProperties,
  propertiesHomeQuery,
  propertyUser,
  findPropertiesByUserId
}
