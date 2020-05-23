'use strict'

const { getQuery } = require('./../../utils')

module.exports = function setupFavoritesService (favoritesModel, propertyModel, filesModel, userModel) {
  async function createOrUpdate (favorite, propertyId, userId) {
    if (favorite.id) {
      const cond = {
        where: {
          id: favorite.id
        }
      }

      const existingfavorite = await favoritesModel.findOne(cond)

      if (existingfavorite) {
        const update = await favoritesModel.update(favorite, cond)
        return update ? favoritesModel.findOne(cond, { raw: true }) : existingfavorite.toJSON({ raw: true })
      }
    }
    favorite.propertyId = propertyId
    favorite.userId = userId

    const result = await favoritesModel.create(favorite)
    return result.toJSON({ raw: true })
  }

  async function create (favorite) {
    const result = await favoritesModel.create(favorite)
    return result.toJSON({ raw: true })
  }

  async function update (favorite) {
    const cond = {
      where: {
        id: favorite.id
      }
    }

    favorite.updatedAt = new Date()
    await favoritesModel.update(favorite, cond)
    const existingfavorite = await favoritesModel.findOne(cond)
    return existingfavorite
  }

  function findById (id) {
    return favoritesModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return favoritesModel.findAll({ raw: true })
  }

  /**
   * Find amount of favorites by query
   * @param {*} id
   */
  function getAmountByQuery (query) {
    const newQuery = getQuery(query)
    return propertyModel.count({
      include: [
        {
          model: favoritesModel,
          where: newQuery
        }
      ],
      where: {
        statusId: 2 // approved property
      },
      raw: true
    })
  }

  function findAllByUserId (id) {
    const userId = parseInt(id)

    return favoritesModel.findAll({
      where: {
        userId: userId
      }
    })
    /*
    return propertyModel.findAll({
      include: [
        {
          attributes: ['url', 'fileType'],
          model: filesModel
        }
      ],
      where: {
        id: {
          [Op.in]: [1]
        },
        statusId: 2 // approved
      }
    })
    */
    /*
    return propertyModel.findAll({
      include: [
        {
          model: favoritesModel,
          where: {
            userId: parseInt(id),
            propertyId: Sequelize.col('properties.id')
          }
        }
      ],
      include: [
        {
          attributes: ['url', 'fileType'],
          model: filesModel
        }
      ],
      where: {
        statusId: 2 // approved
      }
    })
    */
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    update,
    create,
    getAmountByQuery,
    findAllByUserId
  }
}
