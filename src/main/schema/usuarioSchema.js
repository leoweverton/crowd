var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = {
    nome : {type : String},
    email : {type : String},
    senha : {type : String}
};

module.exports = new Schema(usuario);