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
const propertyCreatedAtSchema = joi.date()
const propertyUpdatedAtSchema = joi.date()
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

const propertyQuerySchema = {
  m2Min: propertyM2Schema,
  m2Max: propertyM2Schema,
  m2buildMin: propertyM2buildSchema,
  m2buildMax: propertyM2buildSchema,
  bathroomsMin: propertyBathroomsSchema,
  bathroomsMax: propertyBathroomsSchema,
  downAtMin: propertyDownAtSchema,
  downAtMax: propertyDownAtSchema,
  createdAtMin: propertyCreatedAtSchema,
  createdAtMax: propertyCreatedAtSchema,
  updatedAtMin: propertyUpdatedAtSchema,
  updatedAtMax: propertyUpdatedAtSchema,
  furnished: propertyFurnishedSchema,
  parking: propertyParkingSchema,
  pool: propertyPoolSchema,
  security: propertySecuritySchema,
  elevator: propertyElevatorSchema,
  approved: propertyApprovedSchema,
  nearTo: propertyNearToSchema,
  available: propertyAvailableSchema,
  propertyTypeId: propertyPropertyTypeIdSchema,
  userId: propertyUserIdSchema
}

module.exports = {
  propertyIdSchema,
  propertyCreateSchema,
  propertyUpdateSchema,
  propertyQuerySchema
}
