//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./api/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/madda-ema-wedding'));

// Set our api routes
app.use('/api', api);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/madda-ema-wedding/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
