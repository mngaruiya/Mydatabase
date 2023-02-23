const mongoose = require('mongoose');

// Schema
const projectsSchema = new mongoose.Schema({
    name: { 
        required: true,
        type: String,
    },
    Department: {
        required: true,
        type: String,
    },
    Employee: { 
        required: false,
        type: Number, 
    },
});

module.exports = mongoose.model('Projects', projectsSchema);