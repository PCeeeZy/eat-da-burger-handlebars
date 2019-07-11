// Dependencies
const connection = require('../config/connection');

module.exports = {
    selectAll: (whichTable, cb) => {
        let queryString = "SELECT * FROM ??";

        connection.query(queryString, [whichTable], (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (whichTable, whichColumns, values, cb) => {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [whichTable, whichColumns, values], (err, result) => {
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