module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    postIdx: {
      field: 'post_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'comment',
    timestamps: false,
  });

  return Comment;
}