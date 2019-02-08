var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
    DATE : String,
    LunchMenu : String,
    DinnerMenu : String,
});

module.exports = mongoose.model('form',formSchema);