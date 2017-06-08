var mongoose = require('mongoose');
function UtilFunction(){
    this.criarModulo = criarModule;
}

//Funcao respomsavel por criar modulos do mongoose
function criarModule(nomeModulo, schema) {
    return mongoose.model(nomeModulo, schema);
    
}



module.exports = new UtilFunction;

