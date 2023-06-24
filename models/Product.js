const mongoose = require('mongoose')
const schema = mongoose.Schema;

const ProductSchema = new schema({
    name:String,
    price:Number,
    quantity:Number,
    manufecturer:String
})

module.exports = mongoose.model('Product',ProductSchema)