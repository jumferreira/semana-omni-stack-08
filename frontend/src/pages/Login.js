import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';


// Quando eu quero usar um elemento JS no código HTML, eu uso as {}
// no React, eu uso 'className' pra classe, pq 'class' é uma palavra reservada do JS

// REACT é definido por 3 principios: COMPONENTE, ESTADO E PROPRIEDADE

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        console.log(response);

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>

        </div>
  );
}
