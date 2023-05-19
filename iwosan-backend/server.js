const express = require('express');
const errorHandler = require('./middleware/errorHandler');
// const mongoose = require('mongoose')
// const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.URI

// MIDDLEWARE
app.use(express.json());
app.use('/api/v1/users', require('./routes/userRoutes'))
app.use('/api/v1/clients', require('./routes/clientRoutes'))
app.use(errorHandler)



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

module.exports = app;