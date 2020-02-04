import React, { Component } from "react";
import { connect } from 'react-redux';

import RecentItem from "./RecentItem";
import MsjHistory from "./MsjHistory";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: this.props.loginAccountInfo.id,
      idsAmigos: [],
      amigos: [],
      amigoEscogido: "",
      url: "http://34.94.208.170:3051/graphql"
    };
  }

  pedirRelacionesDelUsuario() {
    const query =
      `
        query{
            RelacionU(id: "${this.state.idUsuario}"){
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
        //console.log(this.state.idsAmigos);
        this.forceUpdate();
        this.pedirUsuarios();
      })
      .catch(console.error);
  }

  pedirUsuario(usr) {
    const query =
      `query {
        getUsuario(id:${usr}){
          user{
            id
            nombre
            apellido
            email
          }
        }
      }`;
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
        this.setState({amigos: [...this.state.amigos, e.data.getUsuario.user]})
        //console.log(this.state.amigos);
      })
      .catch(console.error);
  }

  pedirUsuarios(){
    this.state.idsAmigos.map(id => (
      this.pedirUsuario(id)
    ))
  }

  componentDidMount(){
    this.pedirRelacionesDelUsuario();
  }

  handleClick = (idRetornado) =>{
    this.setState({amigoEscogido: idRetornado});
  }

  renderMsjHistory(){
    if (!this.state.amigoEscogido){
      return <div className="without-choose">Escoge un miembro de tu red</div>
    }else{
      return <MsjHistory amigoEscogido={this.state.amigoEscogido}/>
    }
  }

  render() {
    return (
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recientes</h4>
            </div>
          </div>
          <div className="inbox_chat">
            {this.state.amigos.map(amigo => (
              <RecentItem
                id={amigo.id}
                name={amigo.nombre + " " + amigo.apellido}
                date=""
                message={amigo.email}
                isActive={false}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
        {this.renderMsjHistory()}
      </div>
    );
  }
}

//Redux
const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};


export default connect(mapStateToProps, null)(Chat);
