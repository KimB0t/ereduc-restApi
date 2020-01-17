const mongoose = require('mongoose');

const BonPlanSchema = mongoose.Schema({
    title: String,
    desc: String,
    categorie: String,
    d_debut: Date,
    d_fin: Date,
    url_img: String
})

 module.exports = mongoose.model('BonPlans', BonPlanSchema);
