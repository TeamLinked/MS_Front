//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import BarraNavegacion from './BarraNavegacion';
import Contenido from './Contenido';
import CreateForo from './foros/CreacionForos';

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
        <div style={{background:'#D5E3E1'}}>
          <BarraNavegacion/>
          <div>
            <Contenido body={children}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;

