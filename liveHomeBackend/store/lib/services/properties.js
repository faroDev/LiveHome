'use strict'

module.exports = function setupPropertiesService(propertyModel) {
  async function createOrUpdate(property) {
    if (property.id) {
      const cond = {
        where: {
          id: property.id
        }
      }

      const exitingproperty = await propertyModel.findOne(cond)

      if (exitingproperty) {
        const update = await propertyModel.update(property, cond)
        return update ? propertyModel.findOne(cond, { raw: true }) : exitingproperty.toJSON({ raw: true })
      }
    }

    const result = await propertyModel.create(property)
    return result.toJSON({ raw: true })
  }

  async function create(property) {
    property.updatedAt = new Date()
    property.createdAt = new Date()

    const result = await propertyModel.create(property)
    return result.toJSON({ raw: true })
  }

  async function update(property) {
    const cond = {
      where: {
        id: property.id
      }
    }

    property.updatedAt = new Date()
    await propertyModel.update(property, cond)
    const exitingproperty = await propertyModel.findOne(cond)
    return exitingproperty
  }

  function findById(id) {
    return propertyModel.findByPk(id, { raw: true })
  }

  function findAll() {
    return propertyModel.findAll({ raw: true })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create
  }
}
