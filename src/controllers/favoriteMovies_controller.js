const db = require('../models') 
const axios = require('axios');
const apikey = 'f3203d48'

// create main Model
const Movie = db.movies

const MoviesFromApi = []


// search movies by title from API and insert into user's fav movies database 
const getMovieByTitleFromApi = (req, res, next) => {
    axios.get(`http://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}`)
        .then(res => {
            console.log('Cookies: ', req.cookies)
            console.log(res.data)
        
           let info = {
            id: res.data.imdbID,
            title: res.data.Title,
            posterUrl: res.data.Poster,
            user_id: 1,
        }
        const movie =  Movie.create(info)

        })
        .then(movie => res.status(200).send(movie))
        .catch(next)
};


// search movie in the database
const getMovieByTitle = async(req, res) =>{
    let movies = await Movie.findOne({where: { title: req.params.title }})
   
    res.set('Content-Type', 'application/json')
    res.status(200).send(movies)
    console.log(movies)
}


// insert movie to database 
const addMovie = async (req, res) => {

    console.log(req.body)
    let info = {
        id: req.body.id,
        title: req.body.title,
        user_id: req.body.user_id,
    }

   const movie = await Movie.create(info)
   res.status(200).send(movie)
   console.log(movie)

}


// get all favorite movies

const getAllMovies = async (req, res) => {

    let movies = await Movie.findAll({})
   
    res.set('Content-Type', 'application/json')
    res.cookies
    res.status(200).send(movies)
    console.log(movies)

}

// get all fav movies from a specific user (':id' is the id of the user)
const getFavoriteOneMovie = async (req, res) => {

    let id = req.params.id
    let movie = await Movie.findAll({ where: { user_id: id }})
    res.status(200).send(movie)
    

}

module.exports = {
    addMovie,
    getAllMovies,
    getFavoriteOneMovie,
    getMovieByTitleFromApi,
    getMovieByTitle    
}