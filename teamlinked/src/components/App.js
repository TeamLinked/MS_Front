//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Row,Col, Container } from 'react-bootstrap';

// from ''Componentes
import BarraNavegacion from './BarraNavegacion';
import Contenido from './Contenido';
import Footer from './Footer';


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
        <div style={{minHeight:"calc(100vh)", position:"relative"}}>
          <BarraNavegacion />
          <Contenido body={children} />
          <br></br><br></br>
          <Footer/>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default App;

