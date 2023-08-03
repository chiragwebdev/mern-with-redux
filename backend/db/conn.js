const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/';
const url = 'mongodb://localhost:27017/demo';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})

    // **** method 1 **********
    // .then(res => console.log("okkkkkkkkkkkkkkk...connect"))
    // .catch(err => console.log("noooooooooooooo....connect"))

    // **** method 2 **********
    .then(() => {
        console.log("okkkkkkkkkkkkkkk...connect")
    })
    .catch((err) => {
        console.log("noooooooooooooo....connect")
    })
