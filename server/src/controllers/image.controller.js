const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const imageService = require('../services/image.service');
const config = require('../config/config');

const createImage = catchAsync( async (req, res) => {
  const {path, originalname, mimetype} = req.file
  const image = await imageService.createImage(path, originalname, mimetype);
  res.status(httpStatus.CREATED).json(image);
});

module.exports = {
    createImage
}
