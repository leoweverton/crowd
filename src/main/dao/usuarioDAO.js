'use restrict'
const usuarioScchema = require('../schema/usuarioSchema');
const mongoose = require('mongoose');
const usuarioModel = mongoose.model('USUARIO', usuarioScchema);


function UsuarioDAO(){
    this.consultarTodos = usuarioConsultarTodos,
    this.consultarPorNomeOuEmail = usuarioConsultarPorNomeOuEmail,
    this.cadastrar = usuarioCadastrar,
    this.atualizar = usuarioAtualizar,
    this.deletar = usuarioDeletar,
    this.consultarPorUsuarioOuEmailESenha = usuarioConsultarPorSenhaNomeOuEmail;
}

function usuarioConsultarTodos() {
    return usuarioModel.find(function(err,resultado){
        if(!err){
            console.log('CONSULTAR TODOS', resultado);
        }else{
            throw err;
        }
    });
}

function usuarioConsultarPorNomeOuEmail(nome, email) {
    return  usuarioModel.find({ $or : [{nome : nome}, {email : email}]}, function(err, resultado) {
        if(!err){
            console.log('CONSULTAR TODOS', email, resultado);
        }else{
            throw err;
        } 
    });
}

function usuarioConsultarPorSenhaNomeOuEmail(login, senha) {
    return usuarioModel.find({email : login, senha : senha}, function(err, resultado) {
        if(!err){
            usuario = resultado;
        }else{
            throw err;
        } 
    }); 
    
}

function usuarioCadastrar(nome, email, senha) { 
    return usuarioModel.create({nome: nome, email: email, senha: senha}, function(err, resultado){
        
        if(!err){
            console.log('CADASTRAR ');
        }else{
            throw err;
        }
    });
}

function usuarioAtualizar(id, parametros) {
    return usuarioModel.update({_id: id}, parametros, function(err, resultado){
        if(!err){
            console.log('ATUALIZAR');
        }else{
            throw err;
        }
    });
}

function usuarioDeletar(id) {
    return usuarioModel.remove({_id : id}, function(err, resultado){
        if(!err){
            console.log('REMOVER');
        }else{
            throw err;
        }
    });
}

module.exports = new UsuarioDAO();