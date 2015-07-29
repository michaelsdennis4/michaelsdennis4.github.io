var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan')
var app        = express();

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

app.listen(process.env.port || 3000);