const mongoose = require('mongoose');

const ElementSchema = mongoose.Schema({
    student: String,
    element: String,
    symbol: String,
    number: String,
    word: String,
    artdesc: String,
    elementdesc: String,
    
}, );

module.exports = mongoose.model('Element', ElementSchema);

