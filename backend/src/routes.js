const express = require('express');
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeController');
const DislikeController = require('./Controllers/DislikeController');

const routes = express.Router();


// GET é para pegar alguma informação da API
// request(requisição) tras todas as informações referentes a requisição do usuário
// reponse é o objeto que vamos usar pra dar uma reposta pro cliente
// página por padrão, sempre faz uma requisição GET
// routes.get('/', (request, response) => {
//     // return response.send('Hello Word');
//     return response.json({ message: `Hello ${request.query.name}`});
// });

routes.get('/devs', DevController.index);
// POST é usado pra criar algo novo na aplicação
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// exporto as informações desse arquivo pro projeto todo
// e que pode ser importado em outros arquivos
module.exports = routes;
