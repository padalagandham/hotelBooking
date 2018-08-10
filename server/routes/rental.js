const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
    Rental.find({}, (err, rentals) => {
        res.json(rentals);
    })
});

router.get('/:id', (req, res) => {
    Rental.findById({}, (err, rental)=> {
        if(err){
            res.status(422).send({errors : [{titls: 'Rental Error!', details: 'Cound not find rental'}]});
        }
        res.json(rental);
    })
})

module.exports = router;