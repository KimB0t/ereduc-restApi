const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

 module.exports = mongoose.model('Posts', PostSchema);