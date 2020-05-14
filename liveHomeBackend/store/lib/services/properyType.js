'use strict'

module.exports = function setupPropertyTypeServices(propertyTypeModel) {
  async function createOrUpdate(properyType) {
    if (properyType.id) {
      const cond = {
        where: {
          id: properyType.id
        }
      }

      const existingPropertyType = await propertyTypeModel.findOne(cond)

      if (existingPropertyType) {
        const update = await propertyTypeModel.update(properyType, cond)
        return update ? propertyTypeModel.findOne(cond, { raw: true }) : existingPropertyType.toJSON({ raw: true })
      }
    }

    const result = await propertyTypeModel.create(properyType)
    return result.toJSON({ raw: true })
  }

  async function create(properyType) {
    properyType.updatedAt = new Date()
    properyType.createdAt = new Date()

    const result = await propertyTypeModel.create(properyType)
    return result.toJSON({ raw: true })
  }

  async function update(properyType) {
    const cond = {
      where: {
        id: properyType.id
      }
    }

    properyType.updatedAt = new Date()
    await propertyTypeModel.update(properyType, cond)
    const existingPropertyType = await propertyTypeModel.findOne(cond)
    return existingPropertyType
  }

  function findById(id) {
    return propertyTypeModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return propertyTypeModel.findAll({ raw: true })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create
  }
}
