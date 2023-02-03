const express = require('express');
const Team = require('../models/model');

const router = express.Router();

module.exports = router;

//CRUD routes
//Create
router.post('/teams', async (req, res) => {
    const data = new Team({
        name: 'Manchester United',
        stadium:'Old Trafford',
    });
    try{
    //db.teams.insertOne
    const savedData = await data.save();
    res.status(200).json(savedData);
    } catch (error) {
     res.status(400).json({message: error.message});
    }
    
})
//Read
router.get('/teams', (req, res) => {
    res.send('GET');
})
//Update
router.patch('/teams/:id', (req, res) => {
    res.send('UPDATE');
})
//Delete
router.delete('/teams/:id', (req, res) => {
    res.send('DELETE');
})


