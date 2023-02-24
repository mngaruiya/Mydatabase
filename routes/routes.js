const express = require('express');
const Projects = require('../models/model.js');

const router = express.Router();
module.exports = router;

//CRUD routes
//Create
router.post('/', async (req, res) => {
    const data = new Projects({
        name: req.body.name,
        Department: req.body.Department,
        Employee: req.body.Employee,
    });
    try{
    //db.projects.insertOne
    const savedData = await data.save();
    res.status(200).json(savedData);
    } catch (error) {
     res.status(400).json({message: error.message});
    }
    
})
//Read
router.get('/', async (req, res) => {
    try {
        const data = await Projects.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Update
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

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
        res.status(204).json({ message: `The projects named ${data.name} ${data.department} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


