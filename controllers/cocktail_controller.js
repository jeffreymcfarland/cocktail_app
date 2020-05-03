const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const cocktail = require("../models/cocktail.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    cocktail.all(function(data) {
        const sqlObject = {
        cocktail: data
        };
        console.log(sqlObject);
        res.render("index", sqlObject);
    });
});

router.post("/api/new", function(req, res) {
    cocktail.create(req.body.name, function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

router.delete("/api/new/:id", function(req, res) {
    const condition = parseInt(req.params.id);
  
    cocktail.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  

// Export routes for server.js to use.
module.exports = router;

