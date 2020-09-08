const models = require('../../models');

exports.createComment = async (req, res) => {
    const { body } = req;
    
    try {
        await models.Comment.create({
            content: body.content,
            userID: body.user_id,
            postIdx: body.post_idx,
        });

        return res.status(200).json({
            message: "댓글 작성 성공",
        });

    } catch (err) {
        console.log (err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getComment = async (req, res) => {
    try {
        const comment = await models.Comment.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
            raw: true,
        });

        return res.status(200).json({
            message: "댓글 가져오기 성공",
            data: {
                comment,
            }
        });

    } catch (err) {
        console.log (err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}
