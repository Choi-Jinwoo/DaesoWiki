const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../public'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.status(200).json({
    data: {
      file: req.file.filename,
    },
  });
});

module.exports = router;