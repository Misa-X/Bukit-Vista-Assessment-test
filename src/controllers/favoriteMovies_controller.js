
// create main Model
const Movie = db.Movies

// main work

// 1. create Movie

const addMovie = async (req, res) => {

    let info = {
        image: req.file.path,
        title: req.body.id,
        price: req.body.title,
        description: req.body.user_id,
    }

    const Movie = await Movie.create(info)
    res.status(200).send(Movie)
    console.log(Movie)

}



// 2. get all Movies

const getAllMovies = async (req, res) => {

    let Movies = await Movie.findAll({})
    res.status(200).send(Movies)

}

// 3. get single Movie

const getOneMovie = async (req, res) => {

    let id = req.params.id
    let Movie = await Movie.findOne({ where: { id: id }})
    res.status(200).send(Movie)

}

// 4. update Movie

const updateMovie = async (req, res) => {

    let id = req.params.id

    const Movie = await Movie.update(req.body, { where: { id: id }})

    res.status(200).send(Movie)
   

}

// 5. delete Movie by id

const deleteMovie = async (req, res) => {

    let id = req.params.id
    
    await Movie.destroy({ where: { id: id }} )

    res.status(200).send('Movie is deleted !')

}

module.exports = {
    addMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
    
}