'use strict'
const joi = require('@hapi/joi')

const propertyIdSchema = joi.number()
const propertyM2Schema = joi.number()
const propertyM2buildSchema = joi.number()
const propertyFurnishedSchema = joi.boolean()
const propertyParkingSchema = joi.number()
const propertyPoolSchema = joi.boolean()
const propertySecuritySchema = joi.boolean()
const propertyElevatorSchema = joi.boolean()
const propertyApprovedSchema = joi.number()
const propertyBathroomsSchema = joi.number()
const propertyNearToSchema = joi.string()
const propertyAvailableSchema = joi.boolean()
const propertyDownAtSchema = joi.date()
const propertyCreatedAtSchema = joi.date()
const propertyUpdatedAtSchema = joi.date()
const propertyPropertyTypeIdSchema = joi.number()
const propertyUserIdSchema = joi.number()
const propertyTitleSchema = joi.string()
const propertyDescriptionSchema = joi.string()
const propertyRoomsSchema = joi.number()
const propertyHeatingSchema = joi.boolean()
const propertyCellarSchema = joi.boolean()

const propertyM2FilterSchema = joi.array().items(propertyM2Schema).min(1)

const propertyZoneIdSchema = joi.number()
const propertymodalityTypeId = joi.number()
const propertyInSessionId = joi.number()

const propertyCreateSchema = {
  m2: propertyM2Schema.required(),
  m2build: propertyM2buildSchema.required(),
  furnished: propertyFurnishedSchema.required(),
  parking: propertyParkingSchema.required(),
  pool: propertyPoolSchema.required(),
  security: propertySecuritySchema.required(),
  elevator: propertyElevatorSchema.required(),
  statusId: propertyApprovedSchema.required(),
  bathrooms: propertyBathroomsSchema.required(),
  rooms: propertyRoomsSchema.required(),
  nearTo: propertyNearToSchema.required(),
  available: propertyAvailableSchema.required(),
  downAt: propertyDownAtSchema,
  propertyTypeId: propertyPropertyTypeIdSchema.required(),
  userId: propertyUserIdSchema.required(),
  title: propertyTitleSchema.required(),
  description: propertyDescriptionSchema.required(),
  cellar: propertyCellarSchema.required(),
  heating: propertyHeatingSchema.required(),
  zoneId: propertyZoneIdSchema.required()
}

const propertyUpdateSchema = {
  m2: propertyM2Schema,
  m2build: propertyM2buildSchema,
  furnished: propertyFurnishedSchema,
  parking: propertyParkingSchema,
  pool: propertyPoolSchema,
  security: propertySecuritySchema,
  elevator: propertyElevatorSchema,
  statusId: propertyApprovedSchema,
  bathrooms: propertyBathroomsSchema,
  rooms: propertyRoomsSchema,
  nearTo: propertyNearToSchema,
  available: propertyAvailableSchema,
  downAt: propertyDownAtSchema,
  propertyTypeId: propertyPropertyTypeIdSchema,
  userId: propertyUserIdSchema,
  title: propertyTitleSchema,
  description: propertyDescriptionSchema,
  cellar: propertyCellarSchema,
  heating: propertyHeatingSchema,
  zoneId: propertyZoneIdSchema
}

const propertyQuerySchema = {
  m2: propertyM2FilterSchema,
  m2build: propertyM2buildSchema,
  furnished: propertyFurnishedSchema,
  parking: propertyParkingSchema,
  pool: propertyPoolSchema,
  security: propertySecuritySchema,
  elevator: propertyElevatorSchema,
  statusId: propertyApprovedSchema,
  bathrooms: propertyBathroomsSchema,
  rooms: propertyRoomsSchema,
  nearTo: propertyNearToSchema,
  available: propertyAvailableSchema,
  downAt: propertyDownAtSchema,
  propertyTypeId: propertyPropertyTypeIdSchema,
  userId: propertyUserIdSchema,
  title: propertyTitleSchema,
  description: propertyDescriptionSchema,
  createdAt: propertyCreatedAtSchema,
  updatedAt: propertyUpdatedAtSchema,
  cellar: propertyCellarSchema,
  heating: propertyHeatingSchema,
  zoneId: propertyZoneIdSchema
}
const propertyQueryhome = {
  propertyTypeId: propertyPropertyTypeIdSchema.allow('').optional(),
  modalityTypeId: propertymodalityTypeId.allow('').optional(),
  zoneId: propertyZoneIdSchema.required(),
  inSession: propertyInSessionId.allow('').optional()
}

module.exports = {
  propertyIdSchema,
  propertyCreateSchema,
  propertyUpdateSchema,
  propertyQuerySchema,
  propertyQueryhome
}
