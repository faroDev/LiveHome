const property = {
  property: {
    id: 1,
    m2: 80.30,
    m2build: 75.25,
    furnished: false,
    parking: true,
    pool: true,
    security: true,
    elevator: true,
    approved: true,
    bathrooms: 2,
    nearTo: 'El metro estacion Madera',
    createdAt: '07-05-2020 06:57',
    updateAt: '07-05-2020 06:57',
    avalible: true,
    downAt: null,
    idUser: 1,
    idPropertyType: 1
  },
  property_type: {
    id: 1,
    name: 'apartament'
  },
  property_detail: {
    id: 1,
    adress: 'calle 37 # 45 - 200',
    city: 'bello',
    urbanization: 'La Vida Es bella',
    neighborhood: 'La gabriela',
    longitude: '6.325870',
    latitud: '-75.550124',
    propertyId: 1
  },
  files: {
    id: 1,
    idProperty: 1,
    fileType: 'img',
    url: 'https://www.google.com/maps/place/La+Vida+Es+Bella+Apartamentos/@6.3259795,-75.5507272,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipP9lfiB5vhOfSfFlpjvaB8238_Gzxy2VDAW3qtH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP9lfiB5vhOfSfFlpjvaB8238_Gzxy2VDAW3qtH%3Dw203-h114-k-no!7i3264!8i1836!4m5!3m4!1s0x8e442f74adbabdf1:0x73121770bbdede8!8m2!3d6.3259795!4d-75.5507271'
  },
  modality_type: {
    id: 1,
    name: 'rent'
  },
  modality: {
    id: 1,
    pricem2: null,
    pricePerMoth: 1000000,
    totalPrice: null,
    idProperty: 1,
    idModality: 1
  },
  views: {
    id: 1,
    date: '07-05-2020 06:57',
    counter: 1,
    idProperty: 1
  }
}

module.exports = property
