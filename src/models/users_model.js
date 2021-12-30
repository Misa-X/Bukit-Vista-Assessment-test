module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })


    return User
}