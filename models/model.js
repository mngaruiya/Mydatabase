const mongoose = require('mongoose');

// Schema
const customersSchema = new mongoose.Schema({
    first_name: { 
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    gender: { 
        required: true,
        type: String, 
    },
    age: { 
        required: false,
        type: Number, 
    },
});

module.exports = mongoose.model('customers', customersSchema);
const projectsModel = mongoose.model('customers', customersSchema);
