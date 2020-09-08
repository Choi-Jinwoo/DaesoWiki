const models = require('../../models');

exports.createPost = async (req, res) => {
    const { body } = req;

    try {
        await models.Post.create({
            title: body.title,
            content: body.content,
            category: body.category,
        });

        return res.status(200).json({
            message: "게시글 게시 성공",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}



exports.like = async (req, res) => {
    const { body, user } = req;

    try {
        if (!user) {
            return res.status(401).json({
                message: "로그인 후 이용해주세요",
            });
        }

        const existLike = await models.PostLike.findOne({
            where: {
                userId: user.id,
                postIdx: body.postIdx,
            }
        })

        if (existLike) {
            if (existLike == user) {
                return res.status(200).json({
                    message: "좋아요 취소",
                });
            }
            else {
                return res.status(200).json({
                    message: "좋아요 성공",
                });
            }
        }

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.postget = async (req, res) => {
    const { postIdx } = req.query;

    try {
        const post = await models.Post.findAll({
            order: [
                ['createdAt', 'DESC'],
            ]
        });

        const postLike = await models.PostLike.findAll({
            where: {
                postIdx,
            },
            raw: true,
        });

        post.likeCount = postLike.length;

        return res.status(200).json * ({
            message: '조회 성공',
            data: {
                post,
            }
        })

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}