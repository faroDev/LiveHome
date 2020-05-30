const zones = [
  {
    id: 1,
    name: 'Usaquen',
    createdAt: '2020-05-30T16:49:07.102Z',
    updatedAt: '2020-05-30T16:49:07.102Z'
},
{
    id: 2,
    name: 'Chapinero',
    createdAt: '2020-05-30T16:50:03.327Z',
    updatedAt: '2020-05-30T16:50:03.327Z'
},
{
    id: 3,
    name: 'Santa Fe',
    createdAt: '2020-05-30T16:50:13.148Z',
    updatedAt: '2020-05-30T16:50:13.149Z'
}
]

const zoneToCreate = {
  name: 'Usaquen',
}

const zoneToUpdate = {
  name: 'Usaquen',
}

const zoneUpdated = {
  id: 1,
    name: 'Usaquen',
    createdAt: '2020-05-30T16:49:07.102Z',
    updatedAt: '2020-05-30T16:49:07.102Z'
}

const zoneCreated = {
  id: 1,
    name: 'Usaquen',
    createdAt: '2020-05-30T16:49:07.102Z',
    updatedAt: '2020-05-30T16:49:07.102Z'
}

const zoneFilter = {
  id: 1,
  name: 'Usaquen',
  createdAt: '2020-05-30T16:49:07.102Z',
  updatedAt: '2020-05-30T16:49:07.102Z'
}

class ZoneServiceMock {
  async get () {
    return Promise.resolve(zones)
  }

  async getById (id) {
    const zone = zones.find(zone => zone.id === parseInt(id))
    return Promise.resolve(zone)
  }

  async create (zone) {
    zone.id = 1
    zone.createdAt = '2020-05-30T16:49:07.102Z'
    zone.updatedAt = '2020-05-30T16:49:07.102Z'
    return Promise.resolve(zone)
  }

  async update (id, zone) {
    const zoneUpdated = zones.find(zone => zone.id === parseInt(id))
    return Promise.resolve(zoneUpdated)
  }
}

module.exports = {
  zones,
  zoneToCreate,
  ZoneServiceMock,
  zoneFilter,
  zoneToUpdate,
  zoneUpdated,
  zoneCreated
}
