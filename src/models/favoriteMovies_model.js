module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        posterUrl: {
            type: DataTypes.STRING
        }
    })

    return Movie
}