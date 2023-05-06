const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => {
    res.send('API is Running')
})

const PORT = 5000;

app.listen(
    PORT,
    console.log(`server started on PORT ${PORT}`.yellow.bold),
);