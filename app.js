var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies
app.use(express.static(__dirname + '/public'));

require('./routes')(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
