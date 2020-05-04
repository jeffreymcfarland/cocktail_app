const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const cocktail = require("../models/cocktail.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    cocktail.all(function(data) {
      console.log(data);
      let drinks = [];
      let tried = [];
      for(let i=0; i<data.length; i++) {
        if(data[i].drank === 0) {
          drinks.push(data[i]);
        } else {
          tried.push(data[i]);
        };
      };
      const sqlObject = {
        cocktail: drinks,
        triedCocktails: tried
      };

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

router.put("/api/new/:id", function(req, res) {
  const condition = parseInt(req.params.id);
  const objVal = req.body.drank;

  cocktail.update(objVal, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
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

