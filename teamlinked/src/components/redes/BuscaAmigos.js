import React from "react";
import Amigo from "./Amigo";

class BuscaAmigos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: this.props.idUsuario
    };
  }

  mutacionAgregarAmigo(idUsuario, idAmigo) {
    const query =
      `
      mutation{
        addfriend(id1:"${idUsuario}",id2:"${idAmigo}"){
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
        //alert("Ha sido añadido a tu red");
      })
      .catch(console.error);
  }

  handleClick = idRetornado => {
    var i = 0;
    while(i < 4){
      this.mutacionAgregarAmigo(this.state.idUsuario,idRetornado);
      i = i + 1;
      console.log(i);
    }
    window.location.reload();
  }

  componentDidMount(){
    //console.log(this.props.idUsuario);
  }

  agregarAmigo(){
    alert("agregado");
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm container">
        <h2 className="border-bottom pb-2 mb-0">Busca a un compañero</h2>
        <div className="border-bottom pb-2 form-inline md-form mr-auto pt-2">
          {this.props.children}
          <button type="button" className="btn aqua-gradient btn-rounded btn-sm my-0 col-md-1" onClick={() => this.props.buscar()}>Buscar</button>
        </div>
        {this.props.personas.map(p => (
          <Amigo persona={p} btnlabel={"Agregar"} handleClick={this.handleClick}/>
        ))}
      </div>
    );
  }
}

export default BuscaAmigos;
