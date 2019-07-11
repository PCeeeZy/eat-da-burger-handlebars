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

    updateOne: (devoured, id, cb) => {
        orm.updateOne(devoured, id, (res) => {
            cb(res);
        });
    },

    delete: (id, cb) => {
        orm.delete(id, (res) => {
            cb(res);
        });
    }
};
