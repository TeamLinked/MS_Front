import React, { Component } from 'react';
import ReactFileReader from "react-file-reader";
import axios from "axios";
import { connect } from 'react-redux';
import {Button,Card} from "react-bootstrap";
import uploadImage from "../../assets/uploadImage.png";
import {uploadFileToSend} from "../../actions";

class UploadFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          files: null,
          loadImage: false
        };
        axios.defaults.baseURL = "https://vincat-dangulos.c9users.io";
    }
    /*
    hadleUpload = file => {
        axios.post("/images", {
            images: {
              name: "ejemplo.asd",
              imageable_id: 1,
              imageable_type: "user",
              photo: file
            }
        }).then(res => {
            console.log(res, "respuesta");
        }).catch(e => {
            console.log(e, "error");
        });
    };
    */
    
    handleFiles = files => {
        //console.log(files.base64, "IMAGEN.BASE.64");
        //console.log(files.fileList[0], "IMAGEN.FILELIST");
        
        this.props.uploadFileToSend({
            name: files.fileList[0].name,
            type: files.fileList[0].type,
            photo: files.base64
        });

        this.setState({
            files: files.fileList[0],
            loadImage: true
        });
        //this.hadleUpload(files.base64);
    };

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.loadImage ? URL.createObjectURL(this.state.files):uploadImage} />
                    <Card.Body>
                        <ReactFileReader
                            fileTypes={[".jpeg", ".png", ".jpg"]}
                            base64={true}
                            multipleFiles={false}
                            handleFiles={this.handleFiles}
                        >
                            <Button variant="primary">
                                {'Seleccione imagen'}
                            </Button>
                        </ReactFileReader>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default connect (null,{uploadFileToSend})(UploadFiles);
