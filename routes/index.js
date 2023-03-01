const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../File/index.html'));
});

module.exports = router;
