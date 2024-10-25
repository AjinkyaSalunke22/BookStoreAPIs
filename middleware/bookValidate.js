const Joi = require("joi")

const bookSchema = Joi.object({
    bookName: Joi.string().required(),
    bookDescription: Joi.string().required()
})

module.exports = {bookSchema}