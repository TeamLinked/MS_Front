import React, { Component } from 'react'
import * as user from '../../datos/user.json';
import { connect } from 'react-redux';


// import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';

import '../../styles/Foros.css';
import Foro from '../foros/Foro'
import Friends from './Friends'
import NewPost from './NewPost'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
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
      url: "http://34.94.208.170:3051/graphql"
    }
  }
  state = {
    titulo: '',
    contenido: '',
    categoria: '',
    imagen: null
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

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ query })
    };
    fetch(this.state.url, opts)
      .then(res => res.json())
      .then(e => {
        this.setState({ persons: e.data.getUsuarios });
        this.forceUpdate();
        this.pedirRelacionesDelUsuario();
        //console.log(this.state.persons);
      })
      .catch(console.error);
  }

  pedirRelacionesDelUsuario() {
    const query =
    `
      query {
        RelacionU(id: "`+ this.state.idUsuario +`"){
          friends
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
    fetch(this.state.url, opts)
      .then(res => res.json())
      .then(e => {
        this.setState({ idsAmigos: e.data.RelacionU[0].friends });
        this.forceUpdate();
        this.buscarAmigos(this.state.idsAmigos);
        //console.log(this.state.idsAmigos);
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

    const url = "http://34.94.208.170:3051/graphql";

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
        //console.log(e)
        this.setState({ foros: e.data.Foros });
        //console.log(e.data.Foros);
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.setState({idUsuario: this.props.loginAccountInfo.id});
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
    
    const url = "http://34.94.208.170:3051/graphql";
    
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ query })
    };

    fetch(url, opts)
      .then(res => res.json())
      .then(e => {
        this.user = e.data.getUsuarios[this.id];
        //console.log(this.user);
        //console.log(this.props.loginAccountInfo.id);
        this.forceUpdate();
      })
      .catch(console.error);

    this.pedirForos();
    this.pedirUsuarios();
    
  }

  render() {
    console.clear();
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
                  <div className="author" >
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("./resources/default-avatar.png")}
                      />
                      <h5 className="title">{this.props.loginAccountInfo.nombre} {this.props.loginAccountInfo.apellido}</h5>
                    </a>
                    <p className="description">{this.props.loginAccountInfo.email}</p>
                    
                  </div>
                  
                </CardBody>
                
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
              <NewPost/>
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
