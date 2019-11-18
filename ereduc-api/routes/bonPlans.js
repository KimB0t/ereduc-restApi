const express = require('express');
const router = express.Router();
const BonPlan = require('../models/BonPlan')

//Get all the bonPlans
router.get('/', async (req, res) => {
    try{
        const bonPlans = await BonPlan.find()
        res.json(bonPlans);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Submit a bonPlan
router.post('/', async (req, res) => {
    const bonPlan = new BonPlan({
        title: req.body.title,
        desc: req.body.desc,
        categorie: req.body.categorie
    });
    
    try{
        const savedBonPlan = await bonPlan.save()
        res.json(savedBonPlan);
    }
    catch(err){
        res.json({ message: err});
    }
});

//Get a specific bonPlan
router.get('/:bonPlanId', async (req, res) => {
    try{
        const bonPlan = await BonPlan.findById(req.params.bonPlanId)
        res.json(bonPlan);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Delete a specific bonPlan
router.delete('/:bonPlanId', async (req, res) => {
    try{
        const removedBonPlan = await BonPlan.remove({_id: req.params.bonPlanId})
        res.json(removedBonPlan);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Update a specific bonPlan
router.patch('/:bonPlanId', async (req, res) => {
    try{
        const updatedBonPlan = await BonPlan.updateOne(
            {_id: req.params.bonPlanId}, 
            { $set: { 
                title: req.body.title,
                desc: req.body.desc,
                categorie: req.body.categorie } }
            );
        res.json(updatedBonPlan);
    }
    catch(err){
        res.json({ message: err});
    }
})

module.exports = router;
