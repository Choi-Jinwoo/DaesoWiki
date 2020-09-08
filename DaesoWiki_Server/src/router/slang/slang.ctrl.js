const models = require('../../models');

exports.slangpost = async (req, res) => {
    const { body } = req;

    try {
        await models.post.create({
            title: body.title,
            content: body.content,
            category: body.category,
        })

        return res.status(200).json({
            message: "게시글 게시 성공",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}
