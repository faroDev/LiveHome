'use strict'

const joi = require('@hapi/joi')

const statusIdSchema = joi.number()
const statusName = joi.string()

const statusCreateSchema = {
  name: statusName.required()
}

const statusUpdateSchema = {
  name: statusName
}

module.exports = {
  statusUpdateSchema,
  statusCreateSchema,
  statusIdSchema
}
