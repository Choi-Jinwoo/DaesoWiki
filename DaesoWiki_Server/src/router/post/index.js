const router = require('express').Router();
const postCtrl = require('./post.ctrl');

router.post('/', postCtrl.createPost);
router.get('/', postCtrl.getPosts);
router.post('/like', postCtrl.like);
router.post('/unlike', postCtrl.unlike);

router.get('/history', postCtrl.getHistory);

router.get('/:idx', postCtrl.getPost);
router.put('/:idx', postCtrl.modifyPost);

module.exports = router;