const movieController = require('../controllers/favoriteMovies_controller.js')
const userController = require('../controllers/users_controller.js')


// router
const router = require('express').Router()


// use routers
router.post('/adduser', userController.upload , userController.adduser)

router.get('/allusers', userController.getAllusers)

router.post('/addmovie', movieController.upload , movieController.addmovie)

router.get('/allmovies', movieController.getAllmovies)


// Movie Url and Controller

router.get('/allMovies', MovieController.getAllMovies)
router.post('/addMovie/:id', MovieController.addMovie)



// users router
router.get('/:id', userController.getOneuser)

router.put('/:id', userController.updateuser)

router.delete('/:id', userController.deleteuser)

module.exports = router