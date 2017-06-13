'use restrict'
let express = require('express');
let app = express(); 
let usuarioDAO = require('./src/main/dao/usuarioDAO')
let mongoose = require('mongoose');
let utilServer = require('./src/main/util/utilServer');

var bodyParser = require('body-parser')
app.use(bodyParser.json());        
app.use(bodyParser.urlencoded({extended: true})); 

app.set('view engine', 'ejs');  
app.use(express.static('public')); 


let uri = 'mongodb://localhost:27017/plurer';
mongoose.connect(uri);

app.post("/login", function(request, response){ 
    var loginName = request.body.txtEmailLogin;
    var loginSenha = request.body.txtPasswordLogin;
    var loginSenhaCripto = utilServer.criptografarSenha(loginSenha);

    usuarioDAO.consultarPorUsuarioOuEmailESenha(loginName, loginSenhaCripto).then(function(data){ 
            if(JSON.stringify(data).length > 2){ 
                
                response.render("bemVindo.ejs", {usuario : data});
            }else{
                response.send({erro : "Erro ao cadastrar !"});
            }
    });
});

app.post("/cadastrarUsuario", function(request, response){
    var nome = request.body.txtNomeCadastro;
    var email = request.body.txtEmailCadastro;
    var senha = request.body.txtSenhaCadastro;

    var senhaCripto = utilServer.criptografarSenha(senha);
    usuarioDAO.cadastrar(nome, email, senhaCripto).then(function (usuario) { 
        if(usuario){
            
            response.render("bemVindo.ejs", {usuario : usuario.nome});
        }else{
            response.send({erro : "Erro ao cadastrar !"});
        }
        
        }); 
});

app.get("/logout", function(request, response){
    response.render('index.ejs');
});

app.get("/consultaUsuarioExistente", function(request, response){
    console.log('Teste de ROTA 3');
});

app.get("/consultaEmailExistente", function(request, response){
    console.log('Teste de ROTA 4');
});

app.get("/consultarTodos", function(request, response){ 
    response.render('index.ejs'); 
});

app.get("/", function(request, response){ 
    response.render('index.ejs'); 
});
 

app.listen(3000, function(){   
    console.log('SERVER UP');
});

