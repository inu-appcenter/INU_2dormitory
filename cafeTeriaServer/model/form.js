var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
    DATE : String,
    BAMENU : String,    
    BBMENU : String,
    LAMENU : String,
    LBMENU : String,
    DAMENU : String,
    DBMENU : String
});

module.exports = mongoose.model('form',formSchema);