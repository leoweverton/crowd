'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var usuario = new Schema({
    nome : {type: String, require : true},
    email : {type: String, require : true, set : function(v){return v.toLowerCase()}},
    senha : {type: String, require : true}
});

module.exports = usuario;