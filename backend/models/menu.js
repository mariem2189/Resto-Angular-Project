const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String
});
const menu = mongoose.model('Menu', menuSchema);

module.exports = menu;