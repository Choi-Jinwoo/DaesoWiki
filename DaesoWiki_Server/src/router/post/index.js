const router = require('express').Router();
const postCtrl = require('./post.ctrl');

router.post('/', postCtrl.createPost);
router.get('/', postCtrl.getPost);
router.post('/like', postCtrl.like);
router.post('/unlike', postCtrl.unlike);

module.exports = router;