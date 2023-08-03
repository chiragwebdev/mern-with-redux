const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

console.log("ok successfully")

app.listen(port, ()=>{
    console.log(`port is connecting port no ${port}`)
})

require('./db/conn');

app.use(express.json());

app.use(require("./router/auth"))

    