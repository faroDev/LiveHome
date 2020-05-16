'use strict'

const joi = require('@hapi/joi')

const userIdSchema = joi.number()
const userNameSchema = joi.string()
const userLastNameSchema = joi.string()
const userSecondLastNameSchema = joi.string()
const userStatusSchema = joi.boolean()
const userAuthIdSchema = joi.number()
const userTypeUserIdSchema = joi.number()

const userCreateSchema = {
  name: userNameSchema.required(),
  lastName: userLastNameSchema.required(),
  secondLastName: userSecondLastNameSchema.required(),
  status: userStatusSchema,
  authId: userAuthIdSchema.required(),
  typeUserId: userTypeUserIdSchema.required()
}

const userUpdateSchema = {
  name: userNameSchema,
  lastName: userLastNameSchema,
  secondLastName: userSecondLastNameSchema,
  status: userStatusSchema,
  authId: userAuthIdSchema,
  typeUserId: userTypeUserIdSchema
}

module.exports = {
  userIdSchema,
  userCreateSchema,
  userUpdateSchema
}
