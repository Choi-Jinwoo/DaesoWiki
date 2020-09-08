const router = require('express').Router();
const auth = require('./auth');
const post = require('./post');
const slang = require('./slang');

router.use('/auth', auth);
router.use('/post', post);
router.slang('/slang', slang);

module.exports = router;
