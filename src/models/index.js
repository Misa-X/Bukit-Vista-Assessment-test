const dbConfig = require('../config/dbConfig.js');  //import dbConfig file inside model

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
          }
    }
)



const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users_model.js')(sequelize, DataTypes)
db.movies = require('./favoriteMovies_model.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false})
.then(() => {
    console.log('re-sync completed')
})

db.users.hasMany(db.movies, {
    onDelete: "cascade"
})
db.movies.belongsTo(db.users, { 
    foreignKey: 'user_id',
    as: 'user'
})

// authentication
sequelize.authenticate()
.then(() => {
    console.log('Database connected')
})
.catch(err => (
    console.log('Unable to connect to the database: ', err)
))

module.exports = db 