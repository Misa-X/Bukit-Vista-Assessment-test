module.exports ={
    // HOST: 'movies.c0xmdpoqgezk.us-east-1.rds.amazonaws.com',
    // USER: 'admin',
    // PASSWORD: '08033727014',
    // DB: 'movies',
    // dialect: 'mysql',
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'nodejs_api_db_new',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }

}