'use strict'

const joi = require('@hapi/joi')

const favoriteIdSchema = joi.number()
const favoritePropertyIdSchema = joi.number()
const favoriteUserIdSchema = joi.number()

const favoriteCreateSchema = {
  propertyId: favoritePropertyIdSchema.required(),
  userId: favoriteUserIdSchema.required()
}

const favoriteUpdateSchema = {
  propertyId: favoritePropertyIdSchema,
  userId: favoriteUserIdSchema
}

const favoriteQuerySchema = {
  propertyId: favoritePropertyIdSchema,
  userId: favoriteUserIdSchema
}

module.exports = {
  favoriteIdSchema,
  favoriteCreateSchema,
  favoriteUpdateSchema,
  favoriteQuerySchema
}
