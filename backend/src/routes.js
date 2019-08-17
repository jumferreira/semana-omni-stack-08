const express = require('express');

const routes = express.Router();

// GET é para pegar alguma informação da API
// request(requisição) tras todas as informações referentes a requisição do usuário
// reponse é o objeto que vamos usar pra dar uma reposta pro cliente
// página por padrão, sempre faz uma requisição GET
routes.get('/', (request, response) => {
    // return response.send('Hello Word');
    return response.json({ message: `Hello ${request.query.name}`});
});

// POST é usado pra criar algo novo na aplicação
routes.post('/devs', (request, response) => {
    // esse console mostra que com o uso o Insomnia, a aplicação já recebe dados
    // console.log(request.body);
    return response.json({ ok: true });
});

// exporto as informações desse arquivo pro projeto todo
// e que pode ser importado em outros arquivos
module.exports = routes;
