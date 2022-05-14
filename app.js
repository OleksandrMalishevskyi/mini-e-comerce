const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const orderRoutes = require('./routes/order')
const productRoutes = require('./routes/product')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(express.json({ extended: true }))
app.use(require('morgan')('dev'))
app.use(require('cors')('dev'))
app.use('/api/order', orderRoutes)
app.use('/api/product', productRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app