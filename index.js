const express = require('express');
const colors = require('colors');
const dbConnect = require('./server/Config/dbConnect');
const dotenv = require('dotenv').config();
const authRouter = require('./server/Routes/authRoute');
const productRouter = require('./server/Routes/productRoute');
const categoryRouter = require('./server/Routes/procategoryRoute');
const blogRouter = require('./server/Routes/blogRoute');
const blogCatRouter = require('./server/Routes/blogCatRoute');
const brandRouter = require('./server/Routes/brandRoute');

const morgan = require('morgan');

const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./server/Middleware/errorHandler');
const cookieParser = require('cookie-parser');

const app = express();
dbConnect();

app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is Running');
});

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogCatRouter);
app.use('/api/brand', brandRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`.yellow.bold));
