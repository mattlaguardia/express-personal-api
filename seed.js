// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

// HARD CODED DATA //
var profileSeed = [{
  _id:1,
  name: 'Matt',
  github_link: "https://github.com/mattlaguardia",
  github_profile_image: "https://github.com/account",
  current_city: "San Francisco",
  pets: [{name: "Pepper", type: "Dog", breed: "Dachshund"},{name:
  "Chip", type: "Dog", breed: "Beagle"}],
  movies: "1",
  tv_shows: "2"
}];
