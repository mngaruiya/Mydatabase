const express = require('express');
const customers = require('../models/model');

const router = express.Router();

module.exports = router;

//CRUD routes
//Create
router.post('/customers', async (req, res) => {
    const data = new Customers({
        first_name: req.body. first_name,
        second_name: req.body.second_name,
        gender: req.body.gender,
        age: req.body.age
        
    });
    try{
    //db.customers.insertOne
    const savedData = await data.save();
    res.status(200).json(savedData);
    } catch (error) {
     res.status(400).json({message: error.message});
    }
    
})
//Read
router.get('/', async (req, res) => {
    try {
        const data = await customers.find();
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

        const data = await customers.findByIdAndDelete(id);
        res.status(204).json({ message: `The customer named ${data.first_name} ${data.second_name} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


