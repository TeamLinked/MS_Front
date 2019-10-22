import React, { Component } from 'react'
import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de React Boostrap
import '../styles/App.css'; //Estilos


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  
  render() { 
    return (  
      <div className="App">
      <header className="App-header">
        <a>Learn React</a>
      </header>
    </div>
    );
  }
}
 
export default App;

