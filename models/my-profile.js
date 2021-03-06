var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MyProfileSchema = new Schema ({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [String],
  movies: [String],
  tv_shows: [String]
});

var MyProfile = mongoose.model("Profile", MyProfileSchema);

module.exports = MyProfile;
