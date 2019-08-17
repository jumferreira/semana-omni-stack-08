// FUNÇÃO QUE QUANDO CHAMADA, CRIA UM NOVO SERVIDOR
const express = require('express');

// biblioteca responsável por facilitar o uso de funcões do db
const mongoose = require('mongoose');

// cria a conexão do backend com o react
const cors = require('cors');
const routes = require('./routes');

// servidor criado
const server = express('');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-niiul.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// permite o react de consumir os dados do backend
server.use(cors());
// pro servidor saber que o retorno das requisições vai ser em json
server.use(express.json());

// usa esse use para declarar que quer usar algo novo no projeto (modulo, plugin, ...)
server.use(routes);

// porta que vai ser escutada pelo servidor criada
server.listen(3333);

// COMANDO node src/server.js é usado pra iniciar o servidor
