const mongoose = require('mongoose');

const BonPlanSchema = mongoose.Schema({
    title: String,
    desc: String,
    categorie: String,
	d_depot: Date,
    d_debut: Date,
    d_fin: Date,
    url_img: String,
	a_la_une: Number,
	enseigne: String
	
})

 module.exports = mongoose.model('BonPlans', BonPlanSchema);
