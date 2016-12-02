var crunchy = require('./crunchy.js');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

app.listen(3000, function() {
  console.log("listening on port 3000!")
})

app.get('/crunchy', function(req,res,next){
  res.json(crunchy);
});



console.log(crunchy);
