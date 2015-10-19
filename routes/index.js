var express = require('express'),
    router = express.Router(),
    path = require('path');

router.get('/',
    function(req, res){
      res.render(path.join(__dirname, "../views/index.jade"));
    }
);

router.get('/test', function(req, res, next) {
  res.json(JSON.stringify({name: "Bruno"}));
});

router.post('/test2', function(req, res){
  console.log(req.body);
  var body = req.body["name"];
  console.log(body);
  var json = JSON.stringify("okokokokokok, 45454");
  res.send(json);

});

module.exports = router;
