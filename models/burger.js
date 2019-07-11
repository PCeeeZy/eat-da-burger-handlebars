// Dependencies
const orm = require('../config/orm');

module.exports = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },

    insertOne: (values, cb) => {
        orm.insertOne(values, (res) => {
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
