// Dependencies
const express = require('express');

const burger = require('../models/burger');

// Create instance of express router
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    burger.all(data => {
        let hbsObj = {
            burgers: data
        };
        console.log(`hbs object: ${hbsObj}`);
        res.render('index', hbsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    let table = "burgers";
    let burgerName = req.body.burgerName;

    burger.insertOne(table, "burger_name", burgerName, (result => {
        res.json({ id: result.insertId});
    }));
});

router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', (req, res) => {
    let id = req.params.id;

    burger.delete(id, (result) => {
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;