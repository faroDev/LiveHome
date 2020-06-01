'use strict'

const joi = require('@hapi/joi')

const propertyTypeId = joi.number()
const propertyTypeName = joi.string()

const propertyTypeCreateSchema = {
  name: propertyTypeName.required()
}

const propertyTypeUpdateSchema = {
  name: propertyTypeName
}

module.exports = {
  propertyTypeUpdateSchema,
  propertyTypeCreateSchema,
  propertyTypeId
}
