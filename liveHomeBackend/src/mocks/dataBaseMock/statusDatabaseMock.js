'use strict'
const sinon = require('sinon')

const create = sinon.stub().resolves({})
const findAll = sinon.stub().resolves([])
const update = sinon.stub().resolves({})
const findById = sinon.stub().resolves({})
const findByEmail = sinon.stub().resolves([])
const getAmountByQuery = sinon.stub().resolves(0)
const findAllByUserId = sinon.stub().resolves([])
const deleteByPropertyIdAndUserId = sinon.stub().resolves()
const deleteById = sinon.stub().resolves()
const getPropertiesByIds = sinon.stub().resolves([])

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
  getPropertiesByIds
}
