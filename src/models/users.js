const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
        },
    });

    User.associate = models => {
        User.hasMany(models.Message, { onDelete: 'CASCADE' });
    };

    return User;
};

let users = {
    1: {
        id: '1',
        username: 'Riley Monasmith',
        messageIds: [1],
    },
    2: {
        id: '2',
        username: 'Bynee Waples',
        messageIds: [2],
    },
};

export default user;