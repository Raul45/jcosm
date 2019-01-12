'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = Schema({
    name: String,
    type: String,
    price: Number,
    available: Number,
    color: String,
    descripcion: String

})

module.exports.mongoose.model('Product', ProductSchema)