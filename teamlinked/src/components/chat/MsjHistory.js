import React from "react";

import IncomingMsj from "./IncomingMsj";
import OutgoingMsj from "./OutgoingMsj";

class MsjHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: '',
      mensajesRaw: [],
      idUsuario: "5",
      amigoEscogido: this.props.amigoEscogido
    };
  }

  pedirMensajes(usuario,amigo) {
    const query = `
      query{
        FindMessajes(id1:"${usuario}",id2:"${amigo}"){
          transmitter
          receiver
          message
        }
      }
    `;
    const url =
      "http://34.94.59.230:3050/graphql";
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
        this.forceUpdate();
      })
      .catch(console.error);
  }

  enviarMsg(emisor,receptor,msg) {
    const query = `
      mutation{
        SendMessage(input:{
          transmitter: "${emisor}"
          receiver: "${receptor}"
          message: "${msg}"
        }){
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
        console.log(e);
        this.forceUpdate();
      })
      .catch(console.error);
  }

  mostrarMsgEnHistorial(m) {
    if(m.transmitter === this.state.idUsuario){
      return <OutgoingMsj bodyMsj={m.message} timestamp={""} />
    }else{
      return <IncomingMsj bodyMsj={m.message} timestamp={""} />
    }
  }

  componentDidMount(){
    console.log(this.state.amigoEscogido);
    this.setState({amigoEscogido: this.props.amigoEscogido});
    this.pedirMensajes(this.state.idUsuario,this.state.amigoEscogido);
    this.interval = setInterval(() => this.forceUpdate(), 1000);
  }

  enviarYLimpiarEntrada(){
    this.enviarMsg(this.state.idUsuario,this.state.amigoEscogido,this.state.textField);
    this.pedirMensajes(this.state.idUsuario,this.state.amigoEscogido);
    this.setState({ textField: ''});
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.enviarYLimpiarEntrada();
    }
  }

  handleClick = (e) => {
    this.enviarYLimpiarEntrada();
  }

  render() {
    return (
      <div className="mesgs">
        <div className="msg_history">
          {this.state.mensajesRaw.map(m => (this.mostrarMsgEnHistorial(m)))}
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input
              type="text"
              className="write_msg"
              placeholder="Escribe un mensaje..."
              value={this.state.textField}
              onKeyDown={this.handleKeyDown}
              onChange={(e) => this.setState({ textField: e.target.value })}
            />
            <button 
              className="msg_send_btn" 
              type="button" 
              onClick={this.handleClick}
            >
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MsjHistory;
