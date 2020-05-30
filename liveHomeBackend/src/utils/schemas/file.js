'use strict'

const joi = require('@hapi/joi')

const fileIdSchema = joi.number()
const fileTypeSchema = joi.string()
const filePropertyIdSchema = joi.number()
const fileUrlSchema = joi.string()

const fileCreateSchema = {
  url: fileUrlSchema.required(),
  fileType: fileTypeSchema.required(),
  propertyId: filePropertyIdSchema.required()
}

const fileUpdateSchema = {
  url: fileUrlSchema,
  fileType: fileTypeSchema,
  propertyId: filePropertyIdSchema
}

module.exports = {
  fileIdSchema,
  fileCreateSchema,
  fileUpdateSchema
}
