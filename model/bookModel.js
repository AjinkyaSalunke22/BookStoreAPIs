const { DataTypes } = require("sequelize")
const {sequelize} = require("../config/dbConnect")

const BookModel = sequelize.define("book", {
    bookName: DataTypes.STRING,
    bookDescription: DataTypes.STRING
})


module.exports = {BookModel}