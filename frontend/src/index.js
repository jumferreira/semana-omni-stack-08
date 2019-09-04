import React from 'react';

// versão do react que lida com a DOM (árvore de elementos da aplicação)
import ReactDOM from 'react-dom';

import App from './App';

// está colocando o App na div#root e é renderizado apenas uma vez na aplicação
ReactDOM.render(<App />, document.getElementById('root'));

