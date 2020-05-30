'use strict'

const joi = require('@hapi/joi')

const modalityIdSchema = joi.number()
const modalityPriceM2Schema = joi.number()
const modalityPricePerMothSchema = joi.number()
const modalityTotalPriceSchema = joi.number()
const modalityPropertyIdSchema = joi.number()
const modalityTypeIdSchema = joi.number()

const modalityCreateSchema = {
  pricem2: modalityPriceM2Schema.required(),
  pricePerMoth: modalityPricePerMothSchema.required(),
  totalPrice: modalityTotalPriceSchema.required(),
  propertyId: modalityPropertyIdSchema.required(),
  modalityTypeId: modalityTypeIdSchema.required()
}

const modalityUpdateSchema = {
  pricem2: modalityPriceM2Schema,
  pricePerMoth: modalityPricePerMothSchema,
  totalPrice: modalityTotalPriceSchema,
  propertyId: modalityPropertyIdSchema,
  modalityTypeId: modalityTypeIdSchema
}

module.exports = {
  modalityIdSchema,
  modalityCreateSchema,
  modalityUpdateSchema
}
