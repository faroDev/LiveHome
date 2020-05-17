'use strict'

const config = require('./../../../config')

/**
 * Upload image to GS
 * @param {*} file
 * @param {*} bucket
 */
const uploadImageToStorage = (file, bucket) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('There are not images'))
    }

    const fileName = `${file.originalname}_${Date.now()}`
    const fileUpload = bucket.file(fileName)
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    })

    blobStream.on('error', (error) => {
      reject(error)
    })

    blobStream.on('finish', () => {
      const url = `${config.googleStorage.baseUrl}/${bucket.name}/${fileUpload.name}`
      resolve({
        url,
        mimeType: file.mimetype
      })
    })

    blobStream.end(file.buffer)
  })
}

module.exports = {
  uploadImageToStorage
}
