//DEpendencias
import React, { Component } from 'react';
import logo from '../assets/logo.svg';

//Componentes
import BarraNavegacion from './BarraNavegacion';
import Contenido from './Contenido';
import Footer from './Footer';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  
  render() { 
    return (  
      <React.Fragment>
        <div>
          <BarraNavegacion/>
          <Contenido/>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;

