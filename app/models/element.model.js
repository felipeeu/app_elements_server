const mongoose = require('mongoose');

const ElementSchema = mongoose.Schema({
    name: String,
    number: Number,
    student: String
}, );

module.exports = mongoose.model('Element', ElementSchema);