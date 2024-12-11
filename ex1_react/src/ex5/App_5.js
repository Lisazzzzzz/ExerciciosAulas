import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaImagens from './lista/imagensLista';

const App_5 = () => (
    <Provider store={store}>
        <ListaImagens />
    </Provider>
);

export default App_5;