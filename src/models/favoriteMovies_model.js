module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('favoriteMovie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })

    FavoriteMovies.associate = models => {
        FavoriteMovies.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return FavoriteMovies
}