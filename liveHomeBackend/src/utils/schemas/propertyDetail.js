'use strict'

const joi = require('@hapi/joi')

const propertyDetailIdSchema = joi.number()
const propertyDetailCitySchema = joi.string()
const propertyDetailAddressSchema = joi.string()
const propertyDetailUrbanizationSchema = joi.string()
const propertyDetailNeighborhoodSchema = joi.string()
const propertyDetailLongitudeSchema = joi.number()
const propertyDetailLatitudeSchema = joi.number()
const propertyDetailPropertyIdSchema = joi.number()

const propertyDetailCreateSchema = {
  city: propertyDetailCitySchema.required(),
  address: propertyDetailAddressSchema.required(),
  urbanization: propertyDetailUrbanizationSchema.required(),
  neighborhood: propertyDetailNeighborhoodSchema.required(),
  longitude: propertyDetailLongitudeSchema.required(),
  latitude: propertyDetailLatitudeSchema.required(),
  propertyId: propertyDetailPropertyIdSchema.required()
}

const propertyDetailUpdateSchema = {
  city: propertyDetailCitySchema,
  address: propertyDetailAddressSchema,
  urbanization: propertyDetailUrbanizationSchema,
  neighborhood: propertyDetailNeighborhoodSchema,
  longitude: propertyDetailLongitudeSchema,
  latitude: propertyDetailLatitudeSchema,
  propertyId: propertyDetailPropertyIdSchema
}

module.exports = {
  propertyDetailIdSchema,
  propertyDetailCreateSchema,
  propertyDetailUpdateSchema
}
