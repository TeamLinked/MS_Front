//Dependencias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import * as serviceWorker from './serviceWorker';

//Componentes
import AppRoutes from './routes';
import reducers from './reducers';
import { loadState, saveState} from './components/LocalStorage';

//Estilos
import './styles/index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialData = loadState();

const store = createStore(
    reducers,
    initialData,
    composeEnhancers()
);

store.subscribe(()=>{
    saveState(store.getState());  
});


render(
    <Provider store = {store} >
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 