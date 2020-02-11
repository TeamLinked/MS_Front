import React, { Component } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';

class Postulaciones extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      postulaciones:[]
    }
  }

  verPostulaciones() {
    
    const url = "http://34.94.208.170:3051/graphql";
    const query = `
      query{
        getMisEmpleosAplicados(postulante_id:"`+this.props.loginAccountInfo.id+`"){
          id
          id_postulante
          id_empleo{
            id
            titulo
            descripcion
            fechaPublicacion
            fechaVencimiento
            id_ofertante
            categoria
          }
          fechaAplicacion
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
        console.log(e.data)
        this.setState({
          postulaciones: e.data.getMisEmpleosAplicados
        })
        console.log(this.state.postulaciones)
        this.forceUpdate();
        
      })
      .catch(console.error);
  }

  componentDidMount(){
    console.log(this.state.postulaciones)
    this.verPostulaciones();
  }

  render() {
    return (

      <div style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "15px auto" }}>
        <div style={{ "maxWidth": 1050, "margin": "10px auto","height":"50px", "opacity":0.8}}>
          <Row className="justify-content-end">
            <LinkContainer to="/crearempleo"  style={{ "margin": "5px"}} >
              <Button variant="outline-info">Publicar Empleo</Button>
            </LinkContainer>
            <LinkContainer to="/empleos"  style={{ "margin": "5px"}} >
              <Button variant="outline-info">Buscar Empleo</Button>
            </LinkContainer>
          </Row>
        </div>
        {Array.from(this.state.postulaciones).map((_, i) =>
          <div
            key={i}
          >
            <Card>
              <Card.Header as="h5">{this.state.postulaciones[i].id_empleo.titulo}</Card.Header>
              <Card.Body >
                <Card.Title></Card.Title>
                <Card.Text>
                  <text style={{fontWeight: "bold"}}>Descripcion:</text> {this.state.postulaciones[i].id_empleo.descripcion}
                  <br></br><br></br>
                  <text style={{fontWeight: "bold"}}>Fecha de Aplicacion:</text> {this.state.postulaciones[i].fechaAplicacion}
                  
                </Card.Text >
                <Button variant="primary">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return { loginAccountInfo: state.loginAccountInfo };
};

export default connect(mapStateToProps, null)(Postulaciones);