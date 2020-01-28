import React from "react";
import Amigo from "./Amigo";

class MiRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: ""
    };
  }

  mutacionEliminarAmigo(idUsuario, idAmigo) {
    const query =
      `
      mutation{
        delfriend(id1:"${idUsuario}",id2:"${idAmigo}"){
          id
        }
      }
      `;
    const url =
      "http://34.94.208.170:3051/graphql";
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
        this.forceUpdate();
      })
      .catch(console.error);
  }

  handleClick = idRetornado => {
    var i = 0;
    while(i < 4){
      this.mutacionEliminarAmigo(this.state.idUsuario,idRetornado);
      i = i + 1;
      console.log(i);
    }
    window.location.reload();
  }

  componentDidMount(){
    this.setState({idUsuario: this.props.idUsuario})
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm container">
        <h2 className="border-bottom pb-2 mb-0">Tu Red</h2>
        {this.props.personas.map(p => (
          <Amigo persona={p} btnlabel={"Eliminar"} handleClick={this.handleClick}/>
        ))}
      </div>
    );
  }
}

export default MiRed;
