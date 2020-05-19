'use strict'

const joi = require('@hapi/joi')

const userTypeId = joi.number()
const userTypeName = joi.string()

const userTypeCreateSchema = {
  name: userTypeName.required()
}

const userTypeUpdateSchema = {
  name: userTypeName
}

module.exports = {
  userTypeUpdateSchema,
  userTypeCreateSchema,
  userTypeId
}
