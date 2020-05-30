'use strict'

const joi = require('@hapi/joi')

const zoneIdSchema = joi.number()
const zoneName = joi.string()

const zoneCreateSchema = {
  name: zoneName.required()
}

const zoneUpdateSchema = {
  name: zoneName
}

module.exports = {
  zoneUpdateSchema,
  zoneCreateSchema,
  zoneIdSchema
}
