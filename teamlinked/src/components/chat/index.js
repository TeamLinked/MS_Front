import React, { Component } from 'react';

import MsjHistory from "./MsjHistory";
import Recents from "./Recents";

import '../../styles/Chat.css'; 


class MiChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mensajesRaw: []
        }
    }
    pedirMensajes() {
      const query = `
        query{
          FindMessajes(id1:"1",id2:"2"){
            transmitter
            receiver
            message
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
          this.setState({ mensajesRaw: e.data.FindMessajes });
          // this.mostrarMensajes();
          // console.log(this.state.mensajesRaw);
          this.forceUpdate();
  
        })
        .catch(console.error);
    }
    componentDidMount(){
      this.pedirMensajes();
    }
    render() {
      return (  
        <div className="App">
          <div className="container">
            <div className="messaging">
              <div className="inbox_msg">
                <Recents />
                <MsjHistory mensajesRaw={this.state.mensajesRaw}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
 
export default MiChat;
