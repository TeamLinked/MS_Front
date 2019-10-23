import React from 'react';

//Dependencias
import {Route, Switch} from 'react-router-dom';
//<Route exact path="/listaempleos" component={ListaEmpleos} />
//Componentes
import App from './components/App';
import MiRed from  './components/redes';
import Foros from './components/foros';
import ListaEmpleos from './components/empleos';
import Miperfil from './components/usuarios';
import MiChat from './components/chat';
import Home from './components/home';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path ='/mired' render= {props => <MiRed {...props}/>} />
            <Route path ='/empleos' render= {props => <ListaEmpleos {...props}/>} />
            <Route path ='/foros' render= {props => <Foros {...props}/>} />
            <Route path ='/miperfil' render= {props => <Miperfil {...props}/>} />
            <Route path ='/michat' render= {props => <MiChat {...props}/>} /> 
            <Route path ='/' render= {props => <Home {...props}/>} /> 

        </Switch>
    </App>;

export default AppRoutes;