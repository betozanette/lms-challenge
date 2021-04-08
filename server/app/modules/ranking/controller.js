const { sequelize, Ranking, Users } = require('./../../models');

async function newRanking(model) {
  try {
    return await sequelize.transaction(async (transaction) => {
      const isHaveRanking = await Ranking.findOne({
        where: {
          idUser: model.idUser,
        },
      });

      const ranking = isHaveRanking
        ? isHaveRanking.score < model.score
          ? await Ranking.update(
              {
                score: model.score,
              },
              { where: { id: isHaveRanking.id } },
              { transaction },
            )
          : isHaveRanking
        : await Ranking.create(
            {
              idUser: model.idUser,
              score: model.score,
            },
            { transaction },
          );

      return ranking;
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getRankingByID(id) {
  try {
    return await Ranking.findOne({
      where: { id },
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

async function getRankingByScore() {
  try {
    return await Ranking.findAll({
      include: [{ model: Users, as: 'Users' }],
      order: [
        ['score', 'DESC'],
        ['createdAt', 'ASC'],
      ],
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export default { newRanking, getRankingByScore };
