const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var enqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    comment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Submitted',
        enum: ['Submitted', 'Contacted', 'In Progress'],
    },
});

//Export the model
module.exports = mongoose.model('Enquiry', enqSchema);
