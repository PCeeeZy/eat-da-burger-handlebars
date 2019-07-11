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
//*******TO DO************************ */
    updateOne: (whichTable, whichColumns, conditional, conValue, cb) => {
        let queryString = "UPDATE ?? SET (??) WHERE ?? = ?";

        connection.query(queryString, [whichTable, whichColumns, conditional, conValue], (err, result) => {
            if (err) {
                throw err;
            };
            cb(result);
        });
    }
};