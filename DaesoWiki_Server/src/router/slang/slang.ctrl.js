const models = require('../../models');

exports.slangpost = async (req, res) => {
    const { body } = req;

    try {
        await models.post.create({
            grade: body.grade,
            content: body.content,
            title: body.title,
        })

        return res.status(200).json({
            message: "속어 게시 성공",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getHistory = async (req, res, next) => {
    const { slangIdx } = req.query;

    try {
        const history = await models.SlangHistory.findAll({
            where: {
                slangIdx,
            },
        });

        return res.status(200).json({
            message: '성공',
            data: {
                history,
            },
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}