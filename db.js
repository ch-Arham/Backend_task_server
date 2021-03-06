const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

console.log("Connecting to MongoDB..", process.env.DB_URI);

const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://apple:apple123@cluster0.gqruk.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data)=>console.log(`Connected to MongoDB with server: ${data.connection.host}:${process.env.PORT}`))
    .catch((err)=>console.log(`Connection Failed...err:${err}`));
     
}

module.exports = connectToMongo;