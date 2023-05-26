export {};
require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;
const connectDb = () => {
    return mongoose.connect(
        DATABASE_URL,
        { dbName: `users`, useNewUrlParser: true, useUnifiedTopology: true },
        function () {
            try {
                console.log('Connected to Database');
            } catch (err) {
                throw err;
            }
        });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;