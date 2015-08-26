var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan')
var app        = express();

app.set('port', (process.env.PORT || 5000));

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {name: 'Michael Dennis'})
});

app.get('stylesheets/style.css', function(req, res) {
	res.sendFile('stylesheets/style.css');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});