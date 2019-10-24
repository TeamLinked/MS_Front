import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="card bg-dark text-black mt-2">
                <img src="" class="card-img" alt="..."/>
                <div className="card-img-overlay">
                <h1 className="card-title">Primera Publicacion</h1>
                <p className="card-text">Esto es la primera publicacion</p>
                <p className="card-text">Pruebas</p>
                </div>    
            </div>
        );
    }
}
 
export default Home;