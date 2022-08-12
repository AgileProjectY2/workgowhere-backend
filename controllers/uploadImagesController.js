var multer = require('multer')

// Storage of image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'assets')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

// Fetch results based on estate
const allImages = (req, res) => {
        upload(req, res, function (err) {
               if (err instanceof multer.MulterError) {
                   return res.status(500).json(err)
               } else if (err) {
                   return res.status(500).json(err)
               }
          return res.status(200).send(req.file)
        })
};

module.exports = {
  allImages
};
