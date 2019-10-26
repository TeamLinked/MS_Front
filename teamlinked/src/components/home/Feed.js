import React, { Component } from 'react'
import axios from 'axios';
import * as user from '../../datos/user.json';
// import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';

import '../../styles/Foros.css';
import Foro from '../foros/Foro'

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
    this.id = 0;
    this.state = {
      foros: []
    }
  }
  state = {
    titulo: '',
    contenido: '',
    categoria: '',
    imagen: null
  }

  pedirForos() {
    const query = `
    query {
        Foros {
            id
            titulo
            contenido
            categoria
            fechaCreacion
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

      
  }

  render() {
    return (
      <>
        <div className="content col-lg-10 mx-auto" >
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
                      <h5 className="title">{this.user.nombre} {this.user.apellido}</h5>
                    </a>
                    <p className="description">{this.user.email}</p>
                    <p className="description">{this.user.nacionalidad}</p>
                  </div>
                  <p className="description text-center">
                    {this.user.perf_personal}
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    {this.user.perf_profesional}
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Team Members</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("./resources/faces/ayo-ogunseinde-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("./resources/faces/joe-gardner-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("./resources/faces/clem-onojeghuo-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
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

export default Feed