const models = require('../../models');

exports.login = async (req, res) => {
    const { body } = req;

    try {
        const user = await models.User.findOne({
            where: {
                id: body.id,
                pw: body.pw,
            },
        });

        if (user) {
            return res.status(200).json({
                message: "로그인 성공",
                data: {
                    user: user.id
                }
            });
        }

        return res.status(401).json({
            message: "로그인 실패",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.register = async (req, res) => {
    const { body } = req;

    try {
        const data = await models.user.findOne({
            where: {
                id: body.id,
            },
        });

        if (data) {
            return res.status(401).json({
                message: '이미 사용중인 ID입니다.',
            });
        }

        await models.user.create({
            id: body.id,
            pw: body.pw,
            grade: body.grade,
        })

        return res.status(200).json({
            message: "회원가입 성공",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}