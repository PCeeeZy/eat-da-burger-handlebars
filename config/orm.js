// Dependencies
const connection = require('../config/connection');

module.exports = {
    selectAll: (cb) => {
        let queryString = "SELECT * FROM burgers";

        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (values, cb) => {
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

        connection.query(queryString, [values], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (devoured, id, cb) => {
        //update burgers set devoured = ? where id =?
        let queryString = "UPDATE burgers SET devoured=? WHERE id = ?";

        connection.query(queryString, [devoured, id], (err, result) => {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },

    delete: (id, cb) => {
        let queryString = "DELETE FROM burgers WHERE id=?";

        connection.query(queryString, [id], (err, result) => {
            if(err) {
                throw err;
            }
            cb(result)
        });
    }
};