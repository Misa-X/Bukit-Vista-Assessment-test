const dbConfig = require('../config/dbConfig.js');  //import dbConfig file inside model

const {Sequelize, DataTypes} = require('sequelize');
const { defaultValueSchemable } = require('sequelize/dist/lib/utils');

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
)

// authentication
sequelize.authenticate()
.then(() => {
    console.log('Database connected')
})
.catch(err => (
    console.log('Unable to connect to the database: ', err)
))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users_model.js')(sequelize, DataTypes)
db.favorite_movies = require('./favoriteMovies_model.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false})
.then(() => {
    console.log('re-sync completed')
})

db.users.hasMany(models.favoriteMovies, {
    onDelete: "cascade"
})
db.favoriteMovies.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})

module.exports = db 