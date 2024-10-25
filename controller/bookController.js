const {validate} = require("joi");
const { bookSchema } = require("../middleware/bookValidate");
const { BookModel } = require("../model/bookModel");


// Creaes a book
const addBook = async (req, res)=>{

    try {
    
        const {error} = bookSchema.validate(req.body);
        if(error){
            return res.status(400).json(error.details[0].message)
        }
        const book = await BookModel.create(req.body);
        console.log(" ")
        console.log("Book added sucessfully...")
        return res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


// get all books
const getBooks = async (req, res) =>{

    try {
        const {error} = bookSchema.validate(req.body)
        if(error){
            return res.status.status(400).json(error.details[0].message)
        }

        const books = await BookModel.findAll(req.body)
        console.log(" ")
        console.log("Books fetched sucessfully...")
        return res.status(200).json(books)
 
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};



// get book by id
const getBookById = async (req, res) => {

    try {
       
        const book = await BookModel.findByPk(req.params.id)
        if(!book){
            return res.status(404).json({error: "Book not found"})
        }
        console.log(" ")
        console.log("Book fetched by id sucessfully...")
        res.status(200).json(book)

    } catch (error) {
        res.status(400).json({error: error.message})
    }

};


// update book by id
const updateBookById = async (req, res) => {

    try {
    const {error} = bookSchema.validate(req.body);
    if(error){
        return res.status(400).json(error.details[0].message)
    }
    
    const book = await BookModel.findByPk(req.params.id)
    if(!book){
        return res.status(404).json({error: "Book not found"})
    }

    await book.update(req.body);
    console.log(" ")
    console.log("Book updated sucessfully...")
    return res.status(200).json(book);

    } catch (error) {
        res.status(400).json({error: error.message})
    }

};


// delete book by id
const deleteBookById = async (req, res) => {

    try {
        const book = await BookModel.findByPk(req.params.id)
        if(!book){
            res.status(404).json({error: "Book not found"})
        }

        await book.destroy()
        console.log(" ")
        console.log("Book deleted sucessfully...")
        return res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};

module.exports = ({
    addBook, getBooks, getBookById, updateBookById, deleteBookById
})