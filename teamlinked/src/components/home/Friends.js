import React, { Component } from 'react'

import * as user from '../../datos/user.json';
// import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';

import '../../styles/Foros.css';

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






class Friends extends Component {
    constructor() {
        super();

    }



    render() {
        return (
            <>
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
                        {this.props.persona.nombre}{" "}<br />
                            <span className="text-muted">
                                <small>{this.props.persona.email}</small>
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
            </>

        );
    }
}

export default Friends



















