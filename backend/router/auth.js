const express = require("express");
const router = express.Router();



require("../db/conn");

const formdataSchema = require('../modul/dataschema');

router.get('/', (req, res) => {
    console.log("connect api")
    res.send("connect api")
})

    // *********** get *********************
    

router.get('/datasend', async(req, res) => {
    const user = await formdataSchema.find();
    if (user.length > 0 ){
        res.send(user);
        console.log("yes")
    } else {
        res.send(error)
        console.log("no")
    }
});


    // *********** add *********************

router.post('/datasend', async (req, res) => {
    const { username, email, number, message } = req.body;
    try {
        const formdata = new formdataSchema({ username, email, number, message })
        const addformdata =await formdata.save();
        // res.json(addformdata);
        res.send(addformdata);
    } catch (error) {
        res.status(500).send(error);
    }
})

    // *********** update *********************

// router.put('/datasend/:id', async (req, res) => {
//     const user = await formdataSchema.find();
    
//     const { username, email, number, message } = req.body;
//     try {
//         const formdata = new formdataSchema({ username, email, number, message })
//         const addformdata =await formdata.save();
//         res.json(addformdata);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })


module.exports = router;