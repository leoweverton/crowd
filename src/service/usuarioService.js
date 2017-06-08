var usuarioDAO = require('../dao/usuarioDAO');
var mongoose = require('mongoose');

//URI do banco de dados do AZURE na conta do IGOR
var uri = 'mongodb://pluralia:4ujsMrmNWro9KellvELjqXCU237lf9r9MFNmL9io45BBpuzvCEIuD4tdcf9pygyS8hhQdFdUwDGpUTxjy6yVnw==@pluralia.documents.azure.com:10255/?ssl=true&replicaSet=globaldb'
mongoose.connect(uri);

console.log(usuarioDAO.criarUsuario('LEO SANTOS', 'leo.nunes.dos.santos@avanade.com', '123teste'));

