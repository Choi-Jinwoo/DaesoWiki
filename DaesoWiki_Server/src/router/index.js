const router = require('express').Router();
const auth = require('./auth');
const post = require('./post');

router.use('/auth', auth);
router.use('/post', post);

module.exports = router;
