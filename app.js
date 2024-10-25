const express = require("express")
const {dbConnection} = require("./config/dbConnect")
const { router } = require("./routes/route")
const { BookModel } = require("./model/bookModel")

const app = express()

app.use(express.json());

app.use("/", router)

BookModel.sync({force: false})

app.listen(4000, async ()=>{
    console.log("Server is listening at http://localhost:4000",)
    await dbConnection()
})