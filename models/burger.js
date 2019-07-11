// Dependencies
const orm = require('../config/orm');

module.exports = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insertOne: (whichTable, whichColumns, values, cb) => {
        orm.insertOne(whichTable, whichColumns, values, (res) => {
            cb(res);
        });
    },

    updateOne: (whichTable, whichColumns, conditional, conValue, cb) => {
        orm.updateOne(whichTable, whichColumns, conditional, conValue, (res) => {
            cb(res);
        });
    }
};
