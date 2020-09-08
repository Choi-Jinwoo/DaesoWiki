const router = require('express').Router();
const commentCtrl = require('./comment.ctrl');

router.post('/', commentCtrl.createComment);
// router.get('/', commentCtrl.getComment);

module.exports = router;