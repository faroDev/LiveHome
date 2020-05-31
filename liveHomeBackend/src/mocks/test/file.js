const files = [
  {
    id: 1,
    url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
    fileType: 'image/jpeg',
    createdAt: '2020-05-26T02:28:03.245Z',
    updatedAt: '2020-05-26T02:28:03.245Z',
    propertyId: 2
  }
]

const fileToCreate = {
  url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
  fileType: 'image/jpeg',
  propertyId: 2
}

const fileToUpdate = {
  url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
  fileType: 'image/jpeg',
  propertyId: 2
}

const fileUpdated = {
  id: 1,
  url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
  fileType: 'image/jpeg',
  createdAt: '2020-05-26T02:28:03.245Z',
  updatedAt: '2020-05-26T02:28:03.245Z',
  propertyId: 2
}

const fileCreated = {
  id: 1,
  url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
  fileType: 'image/jpeg',
  createdAt: '2020-05-26T02:28:03.245Z',
  updatedAt: '2020-05-26T02:28:03.245Z',
  propertyId: 2
}

const fileFilter = {
  id: 1,
  url: 'https://storage.cloud.google.com/staging.livehome-589bd.appspot.com/1590460079002.jpeg',
  fileType: 'image/jpeg',
  createdAt: '2020-05-26T02:28:03.245Z',
  updatedAt: '2020-05-26T02:28:03.245Z',
  propertyId: 2
}

class FileServiceMock {
  async get () {
    return Promise.resolve(files)
  }

  async getById (id) {
    const file = files.find(file => file.id === parseInt(id))
    return Promise.resolve(file)
  }

  async create (file) {
    file.id = 1
    file.createdAt = '2020-05-26T02:28:03.245Z'
    file.updatedAt = '2020-05-26T02:28:03.245Z'
    return Promise.resolve(file)
  }

  async update (id, file) {
    const fileUpdated = files.find(file => file.id === parseInt(id))
    return Promise.resolve(fileUpdated)
  }
}

module.exports = {
  files,
  fileToCreate,
  FileServiceMock,
  fileFilter,
  fileToUpdate,
  fileUpdated,
  fileCreated
}
