const express = require('express');
const patients = require('../models/model');

const router = express.Router();


//CRUD routes
//Create
router.post('/', async (req, res) => {
    const data = new patients({
        Name: req.body.Name,
        Gender: req.body.Gender,
        Location: req.body.Location,
        Doctor:req.body.Doctor,
    });
    try{
    //db.patients.insertOne
    const savedData = await data.save();
    res.status(200).json(savedData);
    } catch (error) {
     res.status(400).json({message: error.message});
    }
    
})
//Read
router.get('/', async (req, res) => {
    try {
        const data = await patients.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Update
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const data = await Projects.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//Delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Projects.findByIdAndDelete(id);
        res.status(204).json({ message: `The patients named ${data.Department} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;

