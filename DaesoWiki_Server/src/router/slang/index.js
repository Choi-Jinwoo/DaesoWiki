const router = require('express').Router();
const slangCtrl = require('./slang.ctrl');

router.post('/slangpost', slangCtrl.slangpost);

module.exports = router;