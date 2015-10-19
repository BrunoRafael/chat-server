var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/addUser', function(req, res) {
  res.send(req.body);
});
module.exports = router;
