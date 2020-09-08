const Sequelize = require('sequelize');

const sequelize = new Sequelize('wiki', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  define: {
    timestamps: false,
  },
});

const CommentFun = require('./Comment')
const PostFun = require('./Post');
const PostHistoryFun = require('./PostHistory');
const PostLikeFun = require('./PostLike');
const SlangFun = require('./Slang');
const SlangHistoryFun = require('./SlangHistory');
const UserFun = require('./User');

module.exports = {
  Comment: CommentFun(sequelize, Sequelize),
  Post: PostFun(sequelize, Sequelize),
  PostHistory: PostHistoryFun(sequelize, Sequelize),
  PostLike: PostLikeFun(sequelize, Sequelize),
  Slang: SlangFun(sequelize, Sequelize),
  SlangHistory: SlangHistoryFun(sequelize, Sequelize),
  User: UserFun(sequelize, Sequelize),
}

sequelize.sync().then(() => {
  console.log('[Model] Databases sync');
}).catch((err) => {
  console.log(err.message);
});
