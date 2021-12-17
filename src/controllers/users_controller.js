const db = require('../models')

// create main model
const User = db.users
const FavoriteMovies = db.favorite_movies

// 1. create user

const addUser = async (req, res) => {

    let info = {
        image: req.file.user_id,
        title: req.body.name,
        price: req.body.password,
    }

    const user = await Users.create(info)
    res.status(200).send(user)
    console.log(user)

}



// 2. get all users

const getAllUsers = async (req, res) => {

    let users = await user.findAll({})
    res.status(200).send(users)

}

// 3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await user.findOne({ where: { id: id }})
    res.status(200).send(user)

}

// 4. update user

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await user.update(req.body, { where: { id: id }})

    res.status(200).send(user)
   

}

// 5. delete user by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    await user.destroy({ where: { id: id }} )

    res.status(200).send('user is deleted !')

}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
    
}