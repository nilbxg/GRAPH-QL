import Sequelize from 'sequelize';

const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`);

const models = {
    User: sequelize.import('./user.js'),
    Message: sequelize.import('./message.js'),
};

Object.keys(models).forEach(key => {
    if('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;