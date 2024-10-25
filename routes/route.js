const express = require("express")
const {addBook, getBooks, getBookById, updateBookById, deleteBookById} = require("../controller/bookController")

const router = express.Router()

// Add te book
router.post("/addBook", addBook);

// Get all the books
router.get("/getBooks", getBooks);

// Get book by id
router.get("/getBook/:id", getBookById);

// Update user by id
router.put("/updateBook/:id", updateBookById);

// Delete user by id
router.delete("/deleteBook/:id", deleteBookById);

module.exports = {
    router
}