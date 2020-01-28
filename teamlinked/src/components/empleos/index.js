import React, { Component } from 'react';
import CreacionEmpleos from './CreacionEmpleos';
import Empleos from './Empleos';
import {Card, Button, Row, Col} from 'react-bootstrap';
//Estilos
//import '../styles/Redes.css'; 

class ListaEmpleos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: []
    }
  }

  pedirUsuarios() {
    const url = "http://34.94.208.170:3051/graphql";
    const query = `
      query{
        getCategorias{
          nombre
        }
      }
    `;
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ query })
    };

    fetch(url, opts)
      .then(res => res.json())
      .then(e => {
        //console.log('RTA',e.data);
        this.setState({ categorias: e.data.getCategorias })
        //console.log('RTA2',this.state.categorias);
        this.forceUpdate();
      })
      .catch(console.error);
  }

  componentDidMount(){
    this.pedirUsuarios();
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ "maxWidth": 1050, "margin": "10px auto","height":"50px", "opacity":0.8}}>
          <Row className="justify-content-end">
            <Button style={{ "margin": "5px"}}>Crear Empleo</Button>
            <Button style={{ "margin": "5px"}}>Mis postulaciones</Button>
          </Row>
        </div>
        
        

        {Array.from(this.state.categorias).map((_, i) =>
              <div key={i}>
                <Empleos categoria={this.state.categorias[i].nombre}/>
              </div>
        )
        }
      
      </React.Fragment>
    );
  }
}

export default ListaEmpleos;

