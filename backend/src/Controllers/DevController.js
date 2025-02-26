const axios = require('axios');
const Dev = require('../Models/Dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
            // $ne = NOT EQUAL
                { _id : { $ne: user } },
                { _id : { $nin: loggedDev.likes } },
                { _id : { $nin: loggedDev.dislikes } },
            ],
        })

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        // pega os dados pela api do github
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // pega apenas os dados que eu quero da resposta da api
        const { name, bio, avatar_url: avatar } = response.data;

        // salvo todos os dados que eu quero dentro da minha tabela no db
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar

        });

        return res.json(dev);
    }
};
