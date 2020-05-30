'use strict'

const joi = require('@hapi/joi')

const modalityTypeId = joi.number()
const modalityTypeName = joi.string()

const modalityTypeCreateSchema = {
  name: modalityTypeName.required()
}

const modalityTypeUpdateSchema = {
  name: modalityTypeName
}

module.exports = {
  modalityTypeUpdateSchema,
  modalityTypeCreateSchema,
  modalityTypeId
}
