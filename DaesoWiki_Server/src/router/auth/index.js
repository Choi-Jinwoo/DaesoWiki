const router = require('express').Router();
const authCtrl = require('./auth.ctrl');

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

module.exports = router;
