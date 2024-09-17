const express = require('express');
const router= express.Router();
const ownerModel = require("../model/owners-model");


router.get('/', function(req, res) {
    res.send('hey...');
});

console.log(process.env.NODE_ENV)

router.post('/create',(req,res) => {
    res.send('hey it working')
})


module.exports = router;