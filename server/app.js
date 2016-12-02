var crunchy = require('./crunchy.js');
var app = express();

app.get('/crunchy', function(req,res,next){
  res.json(crunchy);
});

console.log(crunchy);
