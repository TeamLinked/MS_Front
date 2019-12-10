import React, { Component } from 'react';

import MiRed from "./MiRed";
import BuscaAmigos from "./BuscaAmigos";

//Estilos
//import '../styles/Redes.css'; 

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entradaTexto: "",
            persons: [""],
            busqueda: [],
            idUsuario: "5",
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
      }
      buscarUsuarios(){
        let aux = [];
        let searchTerm = this.state.entradaTexto.toLowerCase();
        this.state.persons.forEach(person => {
          if(person.nombre.toLowerCase().includes(searchTerm) || person.apellido.toLowerCase().includes(searchTerm)){
            aux.push(person);
          }
        })
        this.setState({busqueda: aux});
      }
    render() { 
        return (
            <div>
                <MiRed personas={this.state.amigos} idUsuario={this.state.idUsuario}/>
                <BuscaAmigos personas={this.state.busqueda} buscar={this.buscarUsuarios} idUsuario={this.state.idUsuario}>
                    <input type="text" className="form-control mr-sm-2 col-md-10" id="nombre" onChange={(event) => this.onInputChange(event)}></input>
                </BuscaAmigos>
            </div>
            
        );
    }
}
 
export default Index;