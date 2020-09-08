module.exports = (sequelize, DataTypes) => {
  const Slang = sequelize.define('slang', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    grade: {
      field: 'grade',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    }
  }, {
    tableName: 'slang',
    timestamps: false,
  });

  return Slang;
}