import React, { Component } from 'react';
import firebase from 'firebase';

class SubirArchivos extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            uploadValue: 0,
            picture: null

        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(event){
        const file = event.target.file[0];
        const storageRef = firebase.storage().ref(``)
    }


    render() { 
        return (  
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                <br/>
                <input type="file" onchange={this.props.handleUpload}/>
                <br/>
                <img width="320" src={this.state.picture} alt=""/>
            </div>
        );
    }
}
 
export default SubirArchivos;
