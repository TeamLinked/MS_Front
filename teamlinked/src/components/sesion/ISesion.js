import React, { Component } from 'react';
import {Button, Card, Col, Form, Row, Container} from "react-bootstrap";
import { connect } from 'react-redux';
import { storeLoginAccountInfo } from '../../actions';



const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const MIN_PASS_LENGTH = 6 ;


class ISesion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            valid: "undefined",
            userToken:false,
            isLoading: false,
            Key:null, 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleChange(e){

        {/*Email format and password length validation*/}
        let condition;
        console.log(this.state.password.length);
        if(e.target.name ==="email"){
            if(emailRegex.test(e.target.value) && this.state.password.length >= MIN_PASS_LENGTH) {
                condition= "valid";
                if(e.target.value.length === 0 && this.state.password.length === 0)condition = "undefined";
            }else{
                condition = "invalid";
            }
        }else{
            if(emailRegex.test(this.state.email) && e.target.value.length >= MIN_PASS_LENGTH){
                condition = "valid";
            }else{
                condition = "invalid";
            }
        }

        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
       
    }
  
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.setState({ isLoading: true });
        this.queryLDAP();
    }

    queryLDAP() {

        const query =`
            query{
                Login(body:{
                    username:"` + this.state.email+`"
                    password:"` + this.state.password+`"
                }){
                    token
                }
            }
        `;
        const url = "http://34.94.59.230:3050/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ query })
        };

        fetch(url, opts)
            .then(res => res.json())
            .then(e => {
                //this.user = e.data.getUsuarios[this.id];
                console.log("RTA_LOGIN_LDAP",e.data.Login.token);
                this.setState({key:e.data.Login.token})
                this.queryBACK()
            })
        .catch(console.error);
    }

    queryBACK (){
        
        const query =`
            query{
                getUsuarioByEmail(body: {
                email:"`+this.state.email+`"
                }) {
                    user {
                        id
                        nombre
                        apellido
                        email
                    }
                }
            }
        `;

        const url = "http://34.94.59.230:3050/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .then(res => res.json())
            .then(e => {
                //this.user = e.data.getUsuarios[this.id];
                console.log("RTA_LOGIN_BACK",e.data.getUsuarioByEmail.user);
                
                if(this.state.key !== null){
                    const accountInfo = {
                        key : this.state.key,
                        id : e.data.getUsuarioByEmail.user.id,
                        nombre : e.data.getUsuarioByEmail.user.nombre,
                        apellido : e.data.getUsuarioByEmail.user.apellido,
                        email : e.data.getUsuarioByEmail.user.email,
                    }
                    this.props.storeLoginAccountInfo(accountInfo);
                }
                this.setState({isLoading:false})
            })
        .catch(console.error);
    }
    

    render() {
        const userValidation = this.state.valid;
        const  isLoading  = this.state.isLoading;
        console.log(isLoading);
        let message;
        
        switch(userValidation){
            case "undefined":
                    message = <Form.Label>Enter your email and password</Form.Label>;
                    break;
            case "valid":
                message = <Form.Label>Valid email and password</Form.Label>;
                break;
            case "invalid":
                message = <Form.Label>Invalid email or password</Form.Label>;
                break;
            case "nan":
                message = <Form.Label> The user does not exists</Form.Label>;
                break;
            default:
                message = <Form.Label>Default message</Form.Label>;
                break;
        }

        return (
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                <Row className="justify-content-md-center">
                <Col md="auto">
                <Card className="text-center"  >

                    <Card.Header>
                        <h1>Inicia sesion en TeamLinked </h1>
                    </Card.Header>

                    <Card.Body >
                        <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit} >
                            <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">
                                <Col sm={5}>
                                    {message}
                                    <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">
                                <Col sm={5}>
                                    <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    />
                                    <Form.Label>Password must be at least 6 characters long</Form.Label>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="justify-content-md-center">
                                <Col sm={5}>
                                    <Card.Link href="/forgot">Forgot Password?</Card.Link>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="justify-content-md-center">
                                <Col sm={8}>
                                    <Card.Link href="/registro">Don't have and account? Register</Card.Link>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="justify-content-md-center">
                                <Col sm={5}>
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading ? 'Loading…' : 'Submit'}
                                    </Button>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Card.Body>

                </Card>

                    </Col>
                    </Row>
            </Container>

        );
    }
}


export default connect(null, {storeLoginAccountInfo})(ISesion);