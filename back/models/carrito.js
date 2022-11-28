'use strict'

//Modelo de carrito.
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CarritoSchema = Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    cliente: {type: Schema.ObjectId, ref: 'cliente', required: true},
    cantidad: {type: Number, require: true},
    variedad: {type:  Schema.ObjectId, ref: 'variedad', require: true},
    createdAt: {type:Date, default: Date.now, require: true}
});

module.exports =  mongoose.model('carrito',CarritoSchema);