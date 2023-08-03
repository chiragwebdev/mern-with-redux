const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
    message: {
        type: String,
    }
})

// const formdataSchema = mongoose.model('formdataSchema', dataschema);
// module.exports = formdataSchema;

module.exports = mongoose.model('formdataSchema', dataschema);
