const { Schema, model } = require('mongoose');

// usando o MongoDB (banco de dados não relacional)
// não é necessário criar uma estrutura imutável antes

// vou definir a estrutura da tabela do banco de dados
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    // quando o campo não é obrigatório, o tipo pode ser passado direto
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);
