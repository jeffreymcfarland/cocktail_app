// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cocktail = {
  all: function(cb) {
    orm.selectAll("cocktails", function(res) {
        cb(res);
    });
  },
  create: function(cocktailName, cb) {
    orm.create(cocktailName, function(res) {
        cb(res);
    });
  },
  update: function(objVal, condition, cb) {
    orm.update(objVal, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("cocktails", condition, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller
module.exports = cocktail;

