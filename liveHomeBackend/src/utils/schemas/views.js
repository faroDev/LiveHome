'use strict'

const joi = require('@hapi/joi')

const viewIdSchema = joi.number()
const viewPropertyIdSchema = joi.number()
const viewUserIdSchema = joi.number()

const viewCreateSchema = {
  propertyId: viewPropertyIdSchema.required(),
  userId: viewUserIdSchema.required()
}

const viewUpdateSchema = {
  propertyId: viewPropertyIdSchema,
  userId: viewUserIdSchema
}

const viewQuerySchema = {
  propertyId: viewPropertyIdSchema,
  userId: viewUserIdSchema
}

module.exports = {
  viewIdSchema,
  viewCreateSchema,
  viewUpdateSchema,
  viewQuerySchema
}
