const Product = require('../models/product')
const errorHandler = require('../utils/errorHandler')

module.exports.getProductAll = async function (req, res) {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getProductById = async function (req, res) {
    try {
        const product = await Product.find({
            product: req.param.getProductById

        })
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.createProduct = async function(req, res) {

    
    try {
        const product = await new Product({
            _id: req.body._id,  
            name: req.body.name,
            image: req.body.image,  
            price: req.body.price,
            stock: req.body.stock
          }).save()
          res.status(201).json(product)
      } catch (e) {
        errorHandler(res, e)
      }
    }