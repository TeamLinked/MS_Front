import React, { Component } from 'react';

import firebase from 'firebase';
import {Button,Card, FormGroup, Form} from "react-bootstrap";
import { connect } from 'react-redux';
import { uploadURLImageToSend } from '../../actions';



import uploadImage from '../../assets/uploadImage.png';


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

firebase.initializeApp(config) 

class SubirImagenes extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            uploadValue: 0,
            picture: null,
            loadImage: false
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(event){
        const id_usuario = this.props.loginAccountInfo.id;
        const file = event.target.files[0];
        const name = `u${id_usuario}-${Date.now()}`;
        const storageRef = firebase.storage().ref(`/imagenes/${name}`)
        const taskUpload = storageRef.put(file);
        console.log("Resultado",name)
        
        this.setState({
            loadImage: true
        })

        taskUpload.on('state_changed',
            (snapshot) =>{
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                this.setState({
                    uploadValue:percentage
                })
            },  
            (error) =>{
                console.log(error.message)
            },
            () => {
                firebase.storage()
                .ref("imagenes").child(`${name}`)
                .getDownloadURL()
                .then((urlDownload)=>{
                    this.setState({
                        picture:urlDownload,
                        loadImage: true
                    });
                    console.log(urlDownload)
                })
            }
        );
    }


    render() { 
        return (  
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.loadImage ? this.state.picture:uploadImage} />
                    <Card.Body>
                        <FormGroup>
                            <Button>
                                <Form.Control name="images[]" type="file" multiple onChange={this.handleUploadImage}/>
                                {"Cargar imagen"}
                            </Button>
                        </FormGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
 


// Para conectar react con redux

const mapStateToProps = (state) => {
  
    return {loginAccountInfo: state.loginAccountInfo};
};
  
export default connect(mapStateToProps, { uploadURLImageToSend })(SubirImagenes);
  