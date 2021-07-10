require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const authRoute = require('./api/routes/authRoute');
const connectDB = require('./db/db');

const app = express();
const middelware = [morgan('dev'), express.json()];

/** Custom Middelware */

app.use(middelware);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

connectDB(app);
