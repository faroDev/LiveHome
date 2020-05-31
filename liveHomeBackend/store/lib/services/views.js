'use strict'

const { Sequelize } = require('sequelize')
const { getQuery } = require('./../../utils')

module.exports = function setupViewsService (viewsModel, propertyModel) {
  async function create (views) {
    views.userId = (!views.userId) ? 1 : views.userId
    const result = await viewsModel.create(views)
    return result.toJSON()
  }

  async function update (views) {
    const cond = {
      where: {
        id: views.id
      }
    }
    const existViews = await viewsModel.findOne(cond)

    if (existViews) {
      const update = await viewsModel.update(views, cond)
      return update ? viewsModel.findOne(cond, { raw: true }) : existViews.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return viewsModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return viewsModel.findAll({ raw: true })
  }

  function viewsByPropId (propertyId) {
    return viewsModel.findAll({
      attributes: ['id', 'counter'],
      group: ['id', 'counter'],
      where: {
        propertyId: propertyId
      },
      raw: true
    })
  }

  /**
   * Find amount of views by query
   * @param {*} id
   */
  function getAmountByQuery (query) {
    const newQuery = getQuery(query)
    console.log('newQuery ', newQuery)

    return propertyModel.count({
      include: [
        {
          model: viewsModel,
          where: newQuery
        }
      ],
      where: {
        statusId: 2 // approved property
      },
      raw: true
    })
  }

  /**
   * Get views per date
   * @param {*} id
   */
  function getDataPerDateByPropertyId (id) {
    return viewsModel.count({
      attributes: [Sequelize.fn('date_trunc', 'day', Sequelize.col('date'))],
      group: [Sequelize.fn('date_trunc', 'day', Sequelize.col('date'))],
      where: {
        propertyId: id
      }
    })
  }

  return {
    create,
    update,
    findById,
    findAll,
    viewsByPropId,
    getAmountByQuery,
    getDataPerDateByPropertyId
  }
}
