//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Row,Col, Container } from 'react-bootstrap';

// from ''Componentes
import BarraNavegacion from './BarraNavegacion';
import Contenido from './Contenido';


//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/App.css';
//import logo from '../assets/logo.svg';

class App extends Component {
  
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  
  render() {
    const {children} = this.props; 
    return (  
      <React.Fragment>
        <BarraNavegacion />
        <Contenido body={children} />
      </React.Fragment>
    );
  }
}
 
export default App;

