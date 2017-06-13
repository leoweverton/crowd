'use restrict'
let mongoose = require('mongoose');
let usuarioDAO = require('../dao/usuarioDAO')
let utilServer = require('../util/utilServer');

function UsuarioService(){
    this.efetuarLogin = efetuarLogin;
    this.cadastrarUsario = cadastrarUsuario;
}

function verificarSeNomeUsuarioJaCadastrado(nome) {
    var usuario = usuarioDAO.consultarPorNomeOuEmail(nome, "");
    if(usuario != null){
        var retorno = {existe: true, mensagem: "Ja existe usuario cadastrado com esse nome."}
    }
    return retorno;
}

function verificarSeEmailUsuarioJaCadastrado(email) {
    var usuario = usuarioDAO.consultarPorNomeOuEmail("", "email");
    if(usuario != null){
        var retorno = {existe: true, mensagem: "Ja existe usuario cadastrado com esse email."}
    }
    return retorno;
}

function efetuarLogin(login, senha) {
    var senhaCripto = "";
    if(senha){
        senhaCripto = utilServer.criptografarSenha(senha);
    }
    var usuario = usuarioDAO.consultarPorUsuarioOuEmailESenha(login, senhaCripto);
    retorno = usuario;
    console.log("USER : ", retorno);
    return retorno;
}

function cadastrarUsuario(nome, email, senha) {
    var senhaCripto = "";
    if(senha){
        senhaCripto = utilServer.criptografarSenha(senha);
    } 
    var usuario = usuarioDAO.cadastrar(nome, email, senhaCripto);

    if(usuario != null){ 
       var retorno = {usuario : usuario, mensagem: "Usuario cadastrado com sucesso."}
    }
    return retorno;
}

module.exports = new UsuarioService();