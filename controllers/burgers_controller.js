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

//*****UPDATE THIS IS WRONG**** */
router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id;
    let table = "burgers";

    burger.updateOne(table, "burger_name","id", id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;
// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.