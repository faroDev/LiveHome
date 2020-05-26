'use strict'

const joi = require('@hapi/joi')

const userIdSchema = joi.number()
const userNameSchema = joi.string()
const userLastNameSchema = joi.string()
const userSecondLastNameSchema = joi.string()
const userStatusSchema = joi.boolean()
const userAuthIdSchema = joi.number()
const userTypeUserIdSchema = joi.number()
const userDocumentTypeSchema = joi.string()
const userDocumentNumberSchema = joi.string()
const userPhoneSchema = joi.string()
const userCreatedAtSchema = joi.array().items(joi.date())
const userUpdatedAtSchema = joi.array().items(joi.date())

const userCreateSchema = {
  name: userNameSchema.required(),
  lastName: userLastNameSchema.required(),
  secondLastName: userSecondLastNameSchema.required(),
  status: userStatusSchema,
  authId: userAuthIdSchema.required(),
  typeUserId: userTypeUserIdSchema.required(),
  documentType: userDocumentTypeSchema.required(),
  documentNumber: userDocumentNumberSchema.required(),
  phone: userPhoneSchema.required(),
}

const userUpdateSchema = {
  name: userNameSchema,
  lastName: userLastNameSchema,
  secondLastName: userSecondLastNameSchema,
  status: userStatusSchema,
  authId: userAuthIdSchema,
  typeUserId: userTypeUserIdSchema,
  documentType: userDocumentTypeSchema,
  documentNumber: userDocumentNumberSchema,
  phone: userPhoneSchema,
}

const userQuerySchema = {
  name: userNameSchema,
  lastName: userLastNameSchema,
  secondLastName: userSecondLastNameSchema,
  status: userStatusSchema,
  authId: userAuthIdSchema,
  typeUserId: userTypeUserIdSchema,
  createdAt: userCreatedAtSchema,
  updatedAt: userUpdatedAtSchema
}

module.exports = {
  userIdSchema,
  userCreateSchema,
  userUpdateSchema,
  userQuerySchema
}
