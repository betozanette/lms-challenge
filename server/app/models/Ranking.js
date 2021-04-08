module.exports = function (sequelize, DataTypes) {
  const Ranking = sequelize.define(
    'Ranking',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idUser: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
    },
  );

  Ranking.associate = (models) => {
    Ranking.belongsTo(models.Users, {
      foreignKey: 'idUser',
      as: 'Users',
    });
  };

  return Ranking;
};
