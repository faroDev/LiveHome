'use strict'

const joi = require('@hapi/joi')

const authEmailSchema = joi.string().email()
const authPasswordSchema = joi.string()
const authUserNameSchema = joi.string()

const authCreateSchema = {
  email: authEmailSchema.required(),
  password: authPasswordSchema.required(),
  userName: authUserNameSchema.required()
}

module.exports = {
  authCreateSchema
}
