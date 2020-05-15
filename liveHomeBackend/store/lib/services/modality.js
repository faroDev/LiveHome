'use strict'

module.exports = function setupModalityTypeService (modalityModel) {
  async function createOrUpdate (modality, propertyId, modalTypeId) {
    if (modality.id) {
      const cond = {
        where: {
          id: modality.id
        }
      }

      const existingModality = await modalityModel.findOne(cond)

      if (existingModality) {
        const update = await modalityModel.update(modality, cond)
        return update ? modalityModel.findOne(cond, { raw: true }) : existingModality.toJSON({ raw: true })
      }
    }
    modality.propertyId = propertyId
    modality.modalTypeId = modalTypeId

    const result = await modalityModel.create(modality)
    return result.toJSON({ raw: true })
  }

  async function create (modality, propertyId, modalTypeId) {
    modality.propertyId = propertyId
    modality.modalTypeId = modalTypeId
    modality.updatedAt = new Date()
    modality.createdAt = new Date()

    const result = await modalityModel.create(modality)
    return result.toJSON({ raw: true })
  }

  async function update (modality) {
    const cond = {
      where: {
        id: modality.id
      }
    }

    modality.updatedAt = new Date()
    await modalityModel.update(modality, cond)
    const existingModality = await modalityModel.findOne(cond)
    return existingModality
  }

  function findById (id) {
    return modalityModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return modalityModel.findAll({ raw: true })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create
  }
}
