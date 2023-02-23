const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../File/index.html'));
});


const routes = require('./routes/routes');

// Variables
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL || '';

// Connect to the database
mongoose.connect(databaseUrl);
const database = mongoose.connection;

database.on ('error',(error) =>{
    console.error(error);
});
database.once ('connected', () =>{
    console.log('Database Connected');
});

// Create an express app
const app = express();

app.use(express.json()); 
app.use('/', routes);


app.listen(port, () => {
    console.log ('Server is running on PORT ${3000}');
  });



  module.exports = router;