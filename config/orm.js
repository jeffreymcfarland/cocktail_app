// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: (cocktailName, cb) => {
        const queryString = "INSERT INTO cocktails (cocktail_name) VALUES (?)";
        connection.query(queryString, cocktailName, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(objVal, condition, cb) {
        const queryString = "UPDATE cocktails SET drank = ? WHERE id = ?"
        connection.query(queryString, [objVal, condition], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    delete: function(tableName, condition, cb) {
        const queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [tableName, condition], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    }
    
};

module.exports = orm;
  