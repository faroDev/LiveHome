const withImages = require('next-images');

module.exports = {
  ...withImages(),
  env: {
    AUTH_JWT_SECRET: '5Wrx08D4vBEHbuAwThqdtRsQP1jkYFUO',
    GOOGLE_MAPS: 'AIzaSyDwvwz-L38kItJd1lwwaP7sjtiTrtThwwg'
  }
};
