const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');

const imageShema = new mongoose.Schema(
  {
    path: {
      type: String,
      trim: true,
      maxlength: [255, 'Url is too long'],
      required: true,
    },
    name : {
      type: String,
      trim: true,
      maxlength: [255, 'Name is too long'],
      required: true,
    },
    type : {
      type: String,
      trim: true,
      maxlength: [255, 'Type is too long'],
      required: true,
    },
    url : {
      type: String,
      trim: true,
      maxlength: [255, 'Url is too long'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

imageShema.plugin(toJSON);

const Image = mongoose.model('Image', imageShema);
module.exports = Image;
