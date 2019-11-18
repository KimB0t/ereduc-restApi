const mongoose = require('mongoose');

const BonPlanSchema = mongoose.Schema({
    title: String,
    desc: String,
    //img: Image,
    categorie: String
})

 module.exports = mongoose.model('BonPlans', BonPlanSchema);
