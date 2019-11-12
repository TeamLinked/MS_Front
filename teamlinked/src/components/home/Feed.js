import React, { Component } from 'react'
import axios from 'axios';
import * as user from '../../datos/user.json';
import { connect } from 'react-redux';
// import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';

import '../../styles/Foros.css';
import Foro from '../foros/Foro'
import Friends from './Friends'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";






class Feed extends Component {
  constructor() {
    super();
    this.user = user;
    this.id = "";
    this.state = {
      foros: [],
      amigos: [],
      persons: [""],
      idUsuario: this.id,
      idsAmigos: [],
      amigos: [],
    }
  }
  state = {
    titulo: '',
    contenido: '',
    categoria: '',
    imagen: null
  }
  
  componentDidMount(){
    this.setState({idUsuario:this.props.loginAccountInfo.id})
  }

  pedirUsuarios() {
    
    const query = `
        query{
            getUsuarios{
                id
                nombre
                apellido
                email
                identificacion
                nacionalidad
                perf_profesional
                perf_personal
            }
        }
    `;
    const url =
      "https://cors-anywhere.herokuapp.com/http://34.94.59.230:3050/graphql";
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
        this.setState({ persons: e.data.getUsuarios });
        this.forceUpdate();
        this.pedirRelacionesDelUsuario();
      })
      .catch(console.error);
  }
  pedirRelacionesDelUsuario() {
    const query =
      `
        query{
            RelacionU(id: "` +
      this.state.idUsuario +
      `"){
                friends
            }
        }
    `;
    const url =
      "https://cors-anywhere.herokuapp.com/http://34.94.59.230:3050/graphql";
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
        this.setState({ idsAmigos: e.data.RelacionU[0].friends });
        this.forceUpdate();
        this.buscarAmigos(this.state.idsAmigos);
      })
      .catch(console.error);
  }

  buscarAmigos(params) {
    let aux = [];
    params.forEach(idAmigo => {
      this.state.persons.forEach(person => {
        if (idAmigo == person.id) {
          aux.push(person);
        }
      });
    });
    this.setState({ amigos: aux });
  }

  pedirForos() {
    const query = `
    query {
        Foros {
            id
            titulo
            contenido
            categoria
            fecha_creacion
            imagen
        }
    }`;
    const url = "http://34.94.59.230:3050/graphql";

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
        // console.log(e)
        this.setState({ foros: e.data.Foros });
        console.log(e.data.Foros);
      })
      .catch(console.error);
  }





  componentDidMount() {
    const query = `
        query{
          getUsuarios{
            id
            nombre
            apellido
            email
            identificacion
            nacionalidad
            perf_profesional
            perf_personal
          }
        }
    `;
    const url = "https://cors-anywhere.herokuapp.com/http://34.94.59.230:3050/graphql";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ query })
    };
    fetch(url, opts)
      .then(res => res.json())
      .then(e => {
        this.user = e.data.getUsuarios[this.id];
        console.log(this.user);
        console.log("Pepito");
        this.forceUpdate();
      })
      .catch(console.error);
    this.pedirForos();
    this.pedirUsuarios();


  }

  render() {
    return (
      <>
        <div className="content col-lg-10 mx-auto" style={{marginTop: "20px"}} >
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("./resources/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("./resources/mike.jpg")}
                      />
                      <h5 className="title">{this.props.loginAccountInfo.nombre} {this.props.loginAccountInfo.apellido}</h5>
                    </a>
                    <p className="description">{this.props.loginAccountInfo.email}</p>
                    <p className="description">{this.props.loginAccountInfo.apellido}</p>
                  </div>
                  <p className="description text-center">
                    {this.props.loginAccountInfo.email}
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    {this.props.loginAccountInfo.nombre}
                  </div>
                </CardFooter>
              </Card>


              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Miembros de la Red</CardTitle>
                </CardHeader>
                <CardBody>



                  <ul className="list-unstyled team-members">
                    




                        {this.state.amigos.map(p => (
                          <Friends persona={p} />

                        ))}

                    
                    
                  </ul>
                </CardBody>
              </Card>







            </Col>
            <Col md="8">
              {/* <CardBody> */}




              {/* <Form> */}



              {this.state.foros.map(foro => <Foro key={foro.id} foro={foro} />)}

              {/* </Form> */}
              {/* </CardBody> */}


            </Col>
          </Row>
        </div>
      </>
    );
  }
}

 
const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps)(Feed);
