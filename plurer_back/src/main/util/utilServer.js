'use restrict'
let crypto = require('crypto');

function UtilFunctions(senha) {
    this.criptografarSenha = criptografarSenha;
    this. isJsonEmpty = isJsonEmpty;
}


function criptografarSenha(senha) {
    return crypto.createHash('md5').update(senha).digest("hex")
}

function isJsonEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}


module.exports = new UtilFunctions();