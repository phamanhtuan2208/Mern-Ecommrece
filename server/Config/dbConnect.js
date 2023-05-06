const { default: mongoose } = require('mongoose');
const colors = require('colors');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongoose Connected: ${conn.connection.host}`.blue.bold);
    } catch (error) {
        console.log(`Database Error: ${error}`);
    }
};

module.exports = dbConnect;
