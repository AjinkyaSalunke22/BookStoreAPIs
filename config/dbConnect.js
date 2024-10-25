const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("book_store_db", "root", "Pass", 
    {host: "localhost", port: 3306, dialect: "mysql" });

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected sucessfully...")
    } catch (error) {
        console.log(`Unable to connect ${error}`)
    }
};

module.exports = ({
    dbConnection,
    sequelize
})