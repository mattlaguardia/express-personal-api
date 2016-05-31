// require express and other modules
var express = require('express'),
    app = express();

var mongoose = require('mongoose');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

// HARD CODED DATA //
var profile = {
  _id:1,
  name: 'Matt',
  github_link: "https://github.com/mattlaguardia",
  github_profile_image: "https://github.com/account",
  current_city: "San Francisco",
  pets: [{name: "Pepper", type: "Dog", breed: "Dachshund"},{name:
  "Chip", type: "Dog", breed: "Beagle"}]
};

var hikingList = {
  _id: 1,
  location: "1",
  description: "1",
  trails: "1"
}

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "https://secure-dusk-67818.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Some basic information about me!"},
      {method: "POST", path: "/api/campsites", description: "My Favorite hiking locations"}
    ]
  })
});

app.get('/api/profile', function (req, res){
  db.Profile.find({}, function (err, profile){
    res.json(profile);
  })
})


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
