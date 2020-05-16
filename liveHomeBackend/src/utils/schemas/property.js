'use strict'
const joi = require('@hapi/joi')

const propertyIdSchema = joi.number()
const propertyM2Schema = joi.number()
const propertyM2buildSchema = joi.number()
const propertyFurnishedSchema = joi.boolean()
const propertyParkingSchema = joi.boolean()
const propertyPoolSchema = joi.boolean()
const propertySecuritySchema = joi.boolean()
const propertyElevatorSchema = joi.boolean()
const propertyApprovedSchema = joi.boolean()
const propertyBathroomsSchema = joi.number()
const propertyNearToSchema = joi.string()
const propertyAvailableSchema = joi.boolean()
const propertyDownAtSchema = joi.date()
const propertyPropertyTypeIdSchema = joi.number()
const propertyUserIdSchema = joi.number()

const propertyCreateSchema = {
  m2: propertyM2Schema.required(),
  m2build: propertyM2buildSchema.required(),
  furnished: propertyFurnishedSchema.required(),
  parking: propertyParkingSchema.required(),
  pool: propertyPoolSchema.required(),
  security: propertySecuritySchema.required(),
  elevator: propertyElevatorSchema.required(),
  approved: propertyApprovedSchema.required(),
  bathrooms: propertyBathroomsSchema.required(),
  nearTo: propertyNearToSchema.required(),
  available: propertyAvailableSchema.required(),
  downAt: propertyDownAtSchema,
  propertyTypeId: propertyPropertyTypeIdSchema.required(),
  userId: propertyUserIdSchema.required()
}

const propertyUpdateSchema = {
  m2: propertyM2Schema,
  m2build: propertyM2buildSchema,
  furnished: propertyFurnishedSchema,
  parking: propertyParkingSchema,
  pool: propertyPoolSchema,
  security: propertySecuritySchema,
  elevator: propertyElevatorSchema,
  approved: propertyApprovedSchema,
  bathrooms: propertyBathroomsSchema,
  nearTo: propertyNearToSchema,
  available: propertyAvailableSchema,
  downAt: propertyDownAtSchema,
  propertyTypeId: propertyPropertyTypeIdSchema,
  userId: propertyUserIdSchema
}

module.exports = {
  propertyIdSchema,
  propertyCreateSchema,
  propertyUpdateSchema
}
