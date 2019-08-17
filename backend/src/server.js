// FUNÇÃO QUE QUANDO CHAMADA, CRIA UM NOVO SERVIDOR
const express = require('express');

// servidor criado
const server = express();

// GET é para pegar alguma informação da API
// request(requisição) tras todas as informações referentes a requisição do usuário
// reponse é o objeto que vamos usar pra dar uma reposta pro cliente
server.get('/', (request, response) => {
    // return response.send('Hello Word');
    return response.json({ message: `Hello ${request.query.name}`});
});

// porta que vai ser escutada pelo servidor criada
server.listen(3333);

// COMANDO node src/server.js é usado pra iniciar o servidor
