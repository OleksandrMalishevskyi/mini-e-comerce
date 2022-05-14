const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        
    },
    image: {
        type: String,
    },
        

    price: {
        type: Number,

    },
    stock: {
        type: Number,

    },

    
})

module.exports = mongoose.model('Product', productSchema)