const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('users', userShema)