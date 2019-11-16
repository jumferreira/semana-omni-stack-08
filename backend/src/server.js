// FUNÇÃO QUE QUANDO CHAMADA, CRIA UM NOVO SERVIDOR
const express = require('express');

// biblioteca responsável por facilitar o uso de funcões do db
const mongoose = require('mongoose');

// cria a conexão do backend com o react
const cors = require('cors');
const routes = require('./routes');

// servidor criado
const app = express('');
// to criando um server com webSocket pra conseguir criar ações em tempo real
// e conectado com o front. Mas pra isso, eu conecto com o server que eu já tenho
// que agora chama app
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

// cada vez que alguém se conectar eu recebo o socket
// socket é a conexão do backend e do frontend
io.on('connection', socket => {
    const { user } = socket.handshake.query;
    // preciso armazenar o id do socket
    connectedUsers[user] = socket.id;
});


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-niiul.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// criado um middleware pra interceptar as requisições
app.use((req, res, next) => {
    // vou estar mandando os dados pro controller
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

// permite o react de consumir os dados do backend
app.use(cors());
// pro servidor saber que o retorno das requisições vai ser em json
app.use(express.json());

// usa esse use para declarar que quer usar algo novo no projeto (modulo, plugin, ...)
app.use(routes);

// porta que vai ser escutada pelo servidor criada
server.listen(3333);

// COMANDO node src/server.js é usado pra iniciar o servidor
