const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    // npm install --save mongoose-unique-validator
    // unique is not defined, we have to added it
    email: { type: String, required: true, unique: true },
    pwd: { type: String, required: true },
    fName: String,
    lName: String
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model('User', userSchema);

module.exports = user;