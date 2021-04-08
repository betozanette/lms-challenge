const { sequelize, Ranking, Users } = require('./../../models');

async function login(model) {
  try {
    return await sequelize.transaction(async (transaction) => {
      const alreadyRegistered = await Users.findOne({
        where: { fullName: model.name },
      });

      const user = alreadyRegistered
        ? alreadyRegistered
        : await Users.create(
            {
              fullName: model.name,
            },
            { transaction },
          );

      return user;
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export default { login };
