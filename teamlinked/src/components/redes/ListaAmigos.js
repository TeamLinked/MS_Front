import React from "react";
// import SolicitudAmistad from "./SolicitudAmistad";
import MiRed from "./MiRed";
import BuscaAmigos from "./BuscaAmigos";

class ListaAmigos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entradaTexto: "",
      persons: [],
      busqueda: [],
      idUsuario: "1",
      idsAmigos: [],
      amigos: []
    };
    this.aceptar = this.aceptar.bind(this);
    this.rechazar = this.rechazar.bind(this);
    this.buscarUsuarios = this.buscarUsuarios.bind(this);
  }
  
  buscarAmigos(params) {
    let aux = [];
    params.forEach(idAmigo => {
      this.state.persons.forEach(person => {
        if (idAmigo == person.id) {
          aux.push(person);
        }
      });
    });
    this.setState({ amigos: aux });
  }
  pedirUsuarios() {
    const query = `
        query{
            getUsuarios{
                id
                nombre
                apellido
                email
                identificacion
                nacionalidad
                perf_profesional
                perf_personal
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
        this.setState({ persons: e.data.getUsuarios });
        this.forceUpdate();
        this.pedirRelacionesDelUsuario();
      })
      .catch(console.error);
  }
  pedirRelacionesDelUsuario() {
    const query =
      `
        query{
            RelacionU(id: "` +
      this.state.idUsuario +
      `"){
                friends
            }
        }
    `;
    const url =
      "https://cors-anywhere.herokuapp.com/http://35.198.21.214:3050/graphql";
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
        this.setState({ idsAmigos: e.data.RelacionU[0].friends });
        this.forceUpdate();
        this.buscarAmigos(this.state.idsAmigos);
      })
      .catch(console.error);
  }
  componentDidMount() {
    this.pedirUsuarios();
  }
  aceptar() {
    alert("Logica de aceptar");
  }
  rechazar() {
    alert("Logica de rechazar");
  }
  onInputChange(event) {
    this.setState({entradaTexto: event.target.value});
    console.log(this.state.entradaTexto);
  }
  buscarUsuarios(){
    let aux = [];
    //console.log(this.state.persons[0]);
    this.state.persons.forEach(person => {
      if(this.state.entradaTexto == person.nombre){
        aux.push(person);
      }
    })
    this.setState({busqueda: aux});
  }

  render() {
    return (
      <div>
        {/* <SolicitudAmistad
          persona={this.state.persons.indexOf(0)}
          aceptar={this.aceptar}
          rechazar={this.rechazar}
        /> */}
        <MiRed personas={this.state.amigos} />
        <BuscaAmigos personas={this.state.busqueda} buscar={this.buscarUsuarios}>
          <input type="text" className="form-control col-md-10" id="nombre" onChange={(event) => this.onInputChange(event)}></input>
        </BuscaAmigos>
      </div>
    );
  }
}

export default ListaAmigos;
