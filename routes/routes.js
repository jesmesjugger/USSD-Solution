var express = require("express");
var router = express.Router();
const menu = require("../controllers/ussd");


//route to receive payload
router.post("/", function (req, res) {
  menu.run(req.body, (ussdResult) => {
    res.send(ussdResult);
  });
});

module.exports = router;
