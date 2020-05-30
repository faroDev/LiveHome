'use strict'
const sinon = require('sinon')

const create = sinon.stub().resolves({})
const findAll = sinon.stub().resolves([])
const update = sinon.stub().resolves({})
const findById = sinon.stub().resolves({})

module.exports = {
  create,
  findAll,
  update,
  findById
}
