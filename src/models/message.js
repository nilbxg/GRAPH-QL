const message = (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: {
            type: DataTypes.STRING,
        },
    });

    Message.associate = models => {
        Message.belongsTo(models.User);
    };

    return Message;
};

let messages = {
    1: {
        id: '1',
        text: 'Sup',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Later',
        userId: '2',
    },
};


export default message;