const express = require('express');
const colors = require('colors');
const dbConnect = require('./server/Config/dbConnect');
const dotenv = require('dotenv').config();
const authRouter = require('./server/Routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./server/Middleware/errorHandler');
const cookieParser = require('cookie-parser');
const app = express();
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is Running');
});

app.use('/api/user', authRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`.yellow.bold));
