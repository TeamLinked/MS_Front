import React from 'react';

//Dependencias
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './components/App';
import MiRed from  './components/redes';
import MisForos from './components/foros';
import ListaEmpleos from './components/empleos';
import Miperfil from './components/usuarios';
import MiChat from './components/chat';
import Home from './components/home';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/mired" component={MiRed} />
            <Route exact path="/misforos" component={MisForos} />
            <Route exact path="/listaempleos" component={ListaEmpleos} />
            <Route exact path="/miperfil" component={Miperfil} />
            <Route exact path="/michat" component={MiChat} />

            <Route exact path="/" component={Home} />
        </Switch>
    </App>;

export default AppRoutes;