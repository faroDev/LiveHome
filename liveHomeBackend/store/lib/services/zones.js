'use strict'

module.exports = function setupZoneService (zoneModel) {
  async function create (zone) {
    const result = await zoneModel.create(zone)
    return result.toJSON()
  }
  async function update (zone) {
    const cond = {
      where: {
        id: zone.id
      }
    }
    const existZone = await zoneModel.findOne(cond)

    if (existZone) {
      const update = await zoneModel.update(zone, cond)
      return update ? zoneModel.findOne(cond, { raw: true }) : existZone.toJSON({ raw: true })
    }
  }

  function findById (id) {
    return zoneModel.findByPk(id, { raw: true })
  }

  function findAll () {
    return zoneModel.findAll({ raw: true })
  }

  return {
    create,
    update,
    findById,
    findAll
  }
}
