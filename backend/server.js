require('dotenv').config();

const express = require('express');
const cycleRoutes = require('./routes/cycles');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/cycles', cycleRoutes);


// listening to requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})




