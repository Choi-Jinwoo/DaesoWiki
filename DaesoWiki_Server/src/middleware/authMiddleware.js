const models = require('../models');

module.exports = async (req, res, next) => {
    const reqUser = req.headers.user;
    const user = await models.User.findOne({
        where: {
            id: reqUser,
        },
        raw: true
    });
    req.user = user;
    next();
}