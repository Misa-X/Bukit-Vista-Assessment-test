const movieController = require('../controllers/favoriteMovies_controller.js')
// const userController = require('../controllers/users_controller.js')


// router
const router = require('express').Router()



// search movies by title from API and store into user's fav movies database 
router.get('/movies/imdb/:title', movieController.getMovieByTitleFromApi)

// search movie in the database
router.get('/movies/:title', movieController.getMovieByTitle)

// insert movie to database
router.post('/movies/favorite', movieController.addMovie)

// router.get('/savemoviesfromapi', movieController.addMovieFromApi)

// get all user's favorite movies
router.get('/moviesfromdb', movieController.getAllMovies)

// get all fav movies from a specific user (':id' is the id of the user)
router.get('/movies/movie/:id', movieController.getFavoriteOneMovie)



router.post('/checkout', (req, res)=> {
    // We want to clear the cookies
    res.clearCookie('user_id');
   });



module.exports = router