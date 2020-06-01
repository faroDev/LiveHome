const propertyTypes = [
  {
    id: 1,
    name: 'Casa',
    createdAt: '2020-05-26T02:23:40.792Z',
    updatedAt: '2020-05-26T02:23:40.793Z'
  }
]

const propertyTypeToCreate = {
  name: 'Casa'
}

const propertyTypeToUpdate = {
  name: 'Casa'
}

const propertyTypeUpdated = {
  id: 1,
  name: 'Casa',
  createdAt: '2020-05-26T02:23:40.792Z',
  updatedAt: '2020-05-26T02:23:40.793Z'
}

const propertyTypeCreated = {
  id: 1,
  name: 'Casa',
  createdAt: '2020-05-26T02:23:40.792Z',
  updatedAt: '2020-05-26T02:23:40.793Z'
}

const propertyTypeFilter = {
  id: 1,
  name: 'Casa',
  createdAt: '2020-05-26T02:23:40.792Z',
  updatedAt: '2020-05-26T02:23:40.793Z'
}

class PropertyTypeServiceMock {
  async get () {
    return Promise.resolve(propertyTypes)
  }

  async getById (id) {
    const propertyType = propertyTypes.find(propertyType => propertyType.id === parseInt(id))
    return Promise.resolve(propertyType)
  }

  async create (propertyType) {
    propertyType.id = 1
    propertyType.createdAt = '2020-05-26T02:23:40.792Z'
    propertyType.updatedAt = '2020-05-26T02:23:40.793Z'
    return Promise.resolve(propertyType)
  }

  async update (id, propertyType) {
    const propertyTypeUpdated = propertyTypes.find(propertyType => propertyType.id === parseInt(id))
    return Promise.resolve(propertyTypeUpdated)
  }
}

module.exports = {
  propertyTypes,
  propertyTypeToCreate,
  PropertyTypeServiceMock,
  propertyTypeFilter,
  propertyTypeToUpdate,
  propertyTypeUpdated,
  propertyTypeCreated
}
