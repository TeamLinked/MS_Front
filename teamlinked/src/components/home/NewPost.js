import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

import '../foros/index.css'
import firebase from 'firebase';
import { connect } from 'react-redux';
import { uploadURLImageToSend } from '../../actions';

import {
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Input,
    Row,
    Col
} from "reactstrap";

const uploadImage = "https://media.sproutsocial.com/uploads/2017/08/Facebook-Shared-Post-Video.png";

const config = {
    apiKey: "AIzaSyAnyGs-UcEoG6qSosZ4DsKkUjt02J2C8_I",
    authDomain: "teamlinked-f1ec6.firebaseapp.com",
    databaseURL: "https://teamlinked-f1ec6.firebaseio.com",
    projectId: "teamlinked-f1ec6",
    storageBucket: "teamlinked-f1ec6.appspot.com",
    messagingSenderId: "57422199191",
    appId: "1:57422199191:web:d5c0457a042bc571f9ecd2",
    measurementId: "G-G1N4PM0D0W"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadValue: 0,
            picture: null,
            loadImage: false,

            titulo: '',
            contenido: '',
            categoria: '',
            imagen: '',

            isLoading: false,

        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        
        this.setState({ isLoading: true });
        this.query();
    }


    query() {

        const query = `
            mutation{
                inputForo(body:{
                    titulo:"`+ this.state.titulo + `",
                    contenido:"`+ this.state.contenido + `",
                    categoria: "`+ this.state.categoria + `",
                    imagen: "`+ this.state.imagen + `"
                }) {
                    id
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
            .catch(console.error);
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleUploadImage(event) {
        const id_usuario = this.props.loginAccountInfo.id;
        const file = event.target.files[0];
        const name = `u${id_usuario}-${Date.now()}`;
        const storageRef = firebase.storage().ref(`/imagenes/${name}`)
        const taskUpload = storageRef.put(file);
        console.log("Resultado", name)

        this.setState({
            loadImage: true
        })

        taskUpload.on('state_changed',
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({
                    uploadValue: percentage
                })
            },
            (error) => {
                console.log(error.message)
            },
            () => {
                firebase.storage()
                    .ref("imagenes").child(`${name}`)
                    .getDownloadURL()
                    .then((urlDownload) => {
                        this.setState({
                            picture: urlDownload,
                            loadImage: true
                        });
                        console.log(urlDownload)
                    })
            }
        );
    }


    render() {
        const isLoading = this.state.isLoading;
        return (
            // <div className="card bg-dark text-black mt-2">
            //     <img src={this.props.foro.imagen} className="card-img" alt="..."/>
            //     <div className="card-img-overlay">
            //       <h1 className="card-title">{this.props.foro.titulo}</h1>
            //       <p className="card-text">{this.props.foro.contenido}</p>
            //       <p className="card-text">{this.props.foro.fechaCreacion}</p>
            //     </div> 
            // </div>
            <Card>
                <Card.Img class="center-cropped" variant="top" src={this.state.loadImage ? this.state.picture : uploadImage} />
                <Card.Body>
                    <Card.Text>
                        <div className="form-group">
                            <input className="no-border form-control-lg mt-2" type="text" placeholder='Titulo' id='titulo' value={this.state.titulo} onChange={this.handleChange} required />
                        </div>
                        <FormGroup>
                            <Input
                                id="contenido"
                                type="textarea"
                                placeholder="Escribe acá lo que desees publicar"
                                value={this.state.contenido} onChange={this.handleChange} />

                        </FormGroup>
                        <div className="form-group">
                            <input className="no-border" type="text" placeholder='Categoria' id='categoria' value={this.state.categoria} onChange={this.handleChange} required />
                        </div>
                    </Card.Text>
                    <Row>
                        <Col>
                            <div align="center">
                                <FormGroup>
                                    <Button>
                                        <Form.Control name="images[]" type="file" multiple onChange={this.handleUploadImage} />
                                        {"Cambiar imagen"}
                                    </Button>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col>
                            <div align="center">
                                <Form onSubmit={this.handleFormSubmit}>
                                    <FormGroup>
                                        <button type="submit" class="btn btn-outline-info" disabled={isLoading}>
                                            {isLoading ? 'Publicando..' : 'Publicar'}
                                        </button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
// Para conectar react con redux

const mapStateToProps = (state) => {

    return { loginAccountInfo: state.loginAccountInfo };
};

export default connect(mapStateToProps, { uploadURLImageToSend })(NewPost);