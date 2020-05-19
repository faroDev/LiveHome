'use strict'

const joi = require('@hapi/joi')

const userTypeId = joi.number()
const userTypeName = joi.string()
const userTypeDescription = joi.string()

const userTypeCreateSchema = {
  name: userTypeName.required(),
  description: userTypeDescription
}

const userTypeUpdateSchema = {
  name: userTypeName,
  description: userTypeDescription
}

module.exports = {
  userTypeUpdateSchema,
  userTypeCreateSchema,
  userTypeId
}
