const router = require('express').Router();
const auth = require('./auth');
const post = require('./post');
const slang = require('./slang');
const upload = require('./upload');
const comment = require('./comment');

router.use('/auth', auth);
router.use('/post', post);
router.use('/slang', slang);
router.use('/upload', upload);
router.use('/comment', comment);

module.exports = router;
