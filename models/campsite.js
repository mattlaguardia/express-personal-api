var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HikingSchema = new Schema({
  location: String,
  details: String
});

var HikingLocations = mongoose.model('Hiking', HikingSchema);

module.exports = HikingLocations;
