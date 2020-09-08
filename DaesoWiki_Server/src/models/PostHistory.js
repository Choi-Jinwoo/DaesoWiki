module.exports = (sequelize, DataTypes) => {
  const PostHistory = sequelize.define('post_history', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    time: {
      field: 'time',
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'post_history',
    timestamps: false,
  });

  return PostHistory;
}