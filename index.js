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
const colorRouter = require('./server/Routes/colorRoute');
const couponRouter = require('./server/Routes/couponRoute');
const enquiryRouter = require('./server/Routes/enqRoute');
const uploadRouter = require('./server/Routes/uploadRoute');
//cors
const cors = require('cors');

const morgan = require('morgan');

const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./server/Middleware/errorHandler');
const cookieParser = require('cookie-parser');

const app = express();
dbConnect();

app.use(morgan('dev'));
app.use(cors());
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
app.use('/api/color', colorRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/enquiry', enquiryRouter);
app.use('/api/upload', uploadRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`.yellow.bold));
