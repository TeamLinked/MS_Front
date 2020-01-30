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
import CreacionUsuarios from './components/usuarios/CreacionUsuarios';
import Sesion from './components/sesion';
import Registro from './components/sesion/Registro';
import CreacionEmpleos from './components/empleos/CreacionEmpleos';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path ='/sesion' render= {props => <Sesion {...props}/>} />
            <Route path ='/registro' render= {props => <Registro {...props}/>} />
            <Route path ='/mired' render= {props => <MiRed {...props}/>} />
            <Route path ='/empleos' render= {props => <ListaEmpleos {...props}/>} />
            <Route path ='/foros' render= {props => <Foros {...props}/>} />
            <Route path ='/miperfil' render= {props => <Miperfil {...props}/>} />
            <Route path ='/michat' render= {props => <MiChat {...props}/>} />
            <Route path ='/crearusuario' render= {props => <CreacionUsuarios {...props}/>} />
            <Route path ='/crearempleo' render= {props => <CreacionEmpleos {...props}/>} />
            <Route path ='/' render= {props => <Home {...props}/>} />
             
        </Switch>
    </App>;

export default AppRoutes;