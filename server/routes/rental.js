const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
    console.log("=======1");
    Rental.find({}, (err, rentals) => {
        res.json(rentals);
    })
});

router.get('/:id', (req, res) => {
   console.log("req", req.params.id);
    Rental.findById(req.params.id, (err, rentalObj)=> {
        console.log(rentalObj);
        if(err){
            res.status(422).send({errors : [{titls: 'Rental Error!', details: 'Cound not find rental'}]});
        }
        res.json(rentalObj);
    })
})

module.exports = router;