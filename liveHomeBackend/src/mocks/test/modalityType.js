const modalityTypes = [
  {
    id: 1,
    name: 'Rent',
    createdAt: '2020-05-30T16:46:38.480Z',
    updatedAt: '2020-05-30T16:46:38.480Z'
  },
  {
    id: 2,
    name: 'Sell',
    createdAt: '2020-05-30T16:46:47.060Z',
    updatedAt: '2020-05-30T16:46:47.060Z'
  }
]

const modalityTypeToCreate = {
  name: 'Rent'
}

const modalityTypeToUpdate = {
  name: 'Rent'
}

const modalityTypeUpdated = {
  id: 1,
  name: 'Rent',
  createdAt: '2020-05-30T16:46:38.480Z',
  updatedAt: '2020-05-30T16:46:38.480Z'
}

const modalityTypeCreated = {
  id: 1,
  name: 'Rent',
  createdAt: '2020-05-30T16:46:38.480Z',
  updatedAt: '2020-05-30T16:46:38.480Z'
}

const modalityTypeFilter = {
  id: 1,
  name: 'Rent',
  createdAt: '2020-05-30T16:46:38.480Z',
  updatedAt: '2020-05-30T16:46:38.480Z'
}

class ModalityTypeServiceMock {
  async get () {
    return Promise.resolve(modalityTypes)
  }

  async getById (id) {
    const modalityType = modalityTypes.find(modalityType => modalityType.id === parseInt(id))
    return Promise.resolve(modalityType)
  }

  async create (modalityType) {
    modalityType.id = 1
    modalityType.createdAt = '2020-05-30T16:46:38.480Z'
    modalityType.updatedAt = '2020-05-30T16:46:38.480Z'
    return Promise.resolve(modalityType)
  }

  async update (id, modalityType) {
    const modalityTypeUpdated = modalityTypes.find(modalityType => modalityType.id === parseInt(id))
    return Promise.resolve(modalityTypeUpdated)
  }
}

module.exports = {
  modalityTypes,
  modalityTypeToCreate,
  ModalityTypeServiceMock,
  modalityTypeFilter,
  modalityTypeToUpdate,
  modalityTypeUpdated,
  modalityTypeCreated
}
