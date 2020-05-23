'use strict'
const { Op } = require('sequelize')
module.exports = function setupPropertiesService (propertyModel, filesModel) {
  async function createOrUpdate (property) {
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

  async function create (property) {
    property.updatedAt = new Date()
    property.createdAt = new Date()

    const result = await propertyModel.create(property)
    return result.toJSON({ raw: true })
  }

  async function update (property) {
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

  function findById (id) {
    return propertyModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return propertyModel.findAll({ raw: true })
  }

  async function findByQuery (object) {
    // MODIFICAR OBJETO

    return propertyModel.findAll({
      where: object,
      order: [['createdAt', 'DESC']]
    })
  }

  async function findByRank (obj, prop) {
    const cond = { prop }
    const val = { [Op.between]: [obj.min, obj.max] }

    Object.assign(cond, val)
    // const prop2 = prop
    // const min = obj.min
    // const max = obj.max
    console.log(cond)
    return propertyModel.findAll({
      where: cond
    })
  }

  function userProperties (userId) {
    return propertyModel.findAll({
      attributes: ['id', 'm2', 'm2build', 'statusId', 'createdAt'],
      include: [
        {
          attributes: ['id', 'url', 'fileType'],
          model: filesModel
        }
      ],
      where: {
        userId: userId,
        statusId: 2 // approved
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create,
    findByQuery,
    findByRank,
    userProperties
  }
}
