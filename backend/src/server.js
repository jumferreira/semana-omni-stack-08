// FUNÇÃO QUE QUANDO CHAMADA, CRIA UM NOVO SERVIDOR
const express = require('express');
const routes = require('./routes');

// servidor criado
const server = express();

// pro servidor saber que o retorno das requisições vai ser em json
server.use(express.json());

// usa esse use para declarar que quer usar algo novo no projeto (modulo, plugin, ...)
server.use(routes);

// porta que vai ser escutada pelo servidor criada
server.listen(3333);

// COMANDO node src/server.js é usado pra iniciar o servidor
