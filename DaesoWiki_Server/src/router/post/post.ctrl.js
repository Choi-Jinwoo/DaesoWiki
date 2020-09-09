const models = require('../../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getPost = async (req, res) => {
    try {
        const post = await models.Post.findOne({
            where: {
                idx: req.params.idx,
            },
            raw: true,
        });

        const postLike = await models.PostLike.findAll({
            where: {
                postIdx: post.idx
            },
            raw: true,
        });

        post.liked = false;
        if (req.user) {
            for (const pl of postLike) {
                if (pl.userId == req.user.id) {
                    post.liked = true;
                    break;
                }
            }
        }

        post.likeCount = postLike.length;

        res.status(200).json({
            data: {
                post,
            },
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getPosts = async (req, res) => {
    try {
        let posts = []
        if (req.query.keyword) {
            posts = await models.Post.findAll({
                where: {
                    title: {
                        [Op.like]: "%" + req.query.keyword + "%"
                    }
                },
                order: [
                    ['createdAt', 'DESC'],
                ],
                raw: true,
            });
        } else {
            posts = await models.Post.findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
                raw: true,
            });
        }

        for (const post of posts) {
            const postLike = await models.PostLike.findAll({
                where: {
                    postIdx: post.idx
                },
                raw: true,
            });

            post.likeCount = postLike.length;
        }

        return res.status(200).json({
            message: '조회 성공',
            data: {
                posts,
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.createPost = async (req, res) => {
    const { body } = req;

    try {
        await models.Post.create({
            title: body.title,
            content: body.content,
            category: body.category,
            thumbnail: body.thumbnail,
        });

        return res.status(200).json({
            message: "게시글 게시 성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.modifyPost = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;

    if (!user) {
        return res.status(401).json({
            message: '로그인 안됨',
        });
    }


    try {
        await models.Post.update(body, {
            where: {
                idx,
            }
        });

        await models.PostHistory.create({
            userId: user.id,
            postIdx: idx,
            time: new Date(),
        });

        return res.status(200).json({
            message: "게시글 수정 성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}


exports.like = async (req, res) => {
    const { user } = req;
    const { postIdx } = req.query;

    try {
        if (!user) {
            return res.status(401).json({
                message: "로그인 후 이용해주세요",
            });
        }

        const existLike = await models.PostLike.findOne({
            where: {
                userId: user.id,
                postIdx,
            },
            raw: true,
        });

        if (existLike) {
            return res.status(409).json({
                message: '이미 했음'
            });
        }

        await models.PostLike.create({
            userId: user.id,
            postIdx,
        });

        return res.status(200).json({
            message: "성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.unlike = async (req, res) => {
    const { user } = req;
    const { postIdx } = req.query;

    try {
        if (!user) {
            return res.status(401).json({
                message: "로그인 후 이용해주세요",
            });
        }

        const existLike = await models.PostLike.findOne({
            where: {
                userId: user.id,
                postIdx,
            }
        })

        if (!existLike) {
            return res.status(409).json({
                message: '없어'
            });
        }

        await models.PostLike.destroy({
            where: {
                userId: user.id,
                postIdx,
            }
        });

        return res.status(200).json({
            message: "성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getHistory = async (req, res, next) => {
    const { postIdx } = req.query;

    try {
        const history = await models.PostHistory.findAll({
            where: {
                postIdx,
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