const config = require('../config/config');
const Image = require('../models/image.model');

const createImage = async (path, name, type) => {
  const url = `/${config.prefix}/${path}`;
  const image = await Image.create({
    path,
    name,
    type,
    url
  });
  return image;
}

module.exports = {
  createImage,
}
