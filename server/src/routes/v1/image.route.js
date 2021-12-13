const express = require('express');
const multer = require('multer');
const router = express.Router();
const imageController = require('../../controllers/image.controller');
var path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer(
  {
    limits: {
      fileSize: 3 * (1024) * (1024)
    },
    onError: function (err, next) {
      console.log('error', err);
      next(err);
    },
    storage: storage,
    fileFilter(req, file, cb) {
      if (file.mimetype.startsWith('image')) {
        return cb(null, true);
      }
      return cb(new Error('File image/png and image/jpg only allowed!'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

router.post("/", upload.single('image'), imageController.createImage);

module.exports = router;
