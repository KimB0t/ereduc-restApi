const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    prenom: String,
    nom: String,
    email: String,
    password: String
 });

 module.exports = mongoose.model('Users', UserSchema);