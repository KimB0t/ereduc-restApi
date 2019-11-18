const express = require('express');
const router = express.Router();
const User = require('../models/User')

//Get all the users
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Submit a user
router.post('/', async (req, res) => {
    const user = new User({
        prenom: req.body.prenom,
        nom: req.body.nom,
        email: req.body.email,
        password: req.body.password
    });
    
    try{
        const savedUser = await user.save()
        res.json(savedUser);
    }
    catch(err){
        res.json({ message: err});
    }
});

//Get a specific user
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.json(user);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Delete a specific user
router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId})
        res.json(removedUser);
    }
    catch(err){
        res.json({ message: err});
    }
})

//Update a specific user
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId}, 
            { $set: { 
                prenom: req.body.prenom,
                nom: req.body.nom,
                email: req.body.email,
                password: req.body.password
            } }
            );
        res.json(updatedUser);
    }
    catch(err){
        res.json({ message: err});
    }
})

module.exports = router;
