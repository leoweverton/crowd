var schema = require('../schema/usuarioSchema');
var util = require('../util/utilServer');

var modulo = util.criarModulo("USUARIO", schema);

function UsuarioDAO(){
    this.consultarTodosUsuarios = buscarTodos;
    this.criarUsuario = criar;
}


function criar(nomeParam, emailParam, senhaParam) {
     
    modulo.create({nome : nomeParam, email : emailParam, emailParam : senhaParam},function(erro, resultado){
        if(!erro){
            console.log('INSERT WTH SUCCESS: ', resultado);
        }else{
            throw erro;
        }
    });
}

function buscarTodos(){ 
    modulo.find(function(erro, resultado){
        if(!erro){
            console.log(resultado);
        }else{
            throw erro;
        }
    });

};

module.exports = new UsuarioDAO;