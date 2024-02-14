const Sequelize = require("sequelize");
const article = require("../models/article");
const sequelize = new Sequelize('mysql://root:Qwerty@localhost:3306/joga_sequelize')

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);


const getAllArtticles = (req, res) => {
    Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}


module.exports = {
    getAllArtticles
}