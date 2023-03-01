const mongoose = require('mongoose');

// Schema
const patientsSchema = new mongoose.Schema({
    Name: { 
        required: true,
        type: String,
    },
    Gender: {
        required: true,
        type: String,
    },
    Location : { 
        required: true,
        type: String, 
    },
   
    Doctor : { 
        required: true,
        type: String, 
    },
});

module.exports = mongoose.model('patients', patientsSchema);

