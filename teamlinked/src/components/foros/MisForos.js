import React, { Component } from 'react';
import { connect } from 'react-redux';
import Foro from '../foros/Foro'


class MisForos extends Component {
    constructor() {
      super();
      this.state = {
          foros: []
      }
    }
    state = {
      titulo: '',
      contenido: '',
      categoria: '',
      fecha_creacion: '',
      imagen: ''
    }
    
    pedirForosPorUsuario() {
        const query = `
        query {
            findForoCreador(creador: ` + this.props.loginAccountInfo.id + `) {
              id
              id_creador
              titulo
              contenido
              fecha_creacion
              categoria
              imagen
          }
        }`;
        
        const url = "http://34.94.208.170:3051/graphql";

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
            //console.log(e)
            this.setState({ foros: e.data.findForoCreador });
            //console.log("estos son los foros: ", e.data.findForoCreador);
        })
        .catch(console.error);
    }

    componentDidMount() {
        this.pedirForosPorUsuario();
    }

    render() {
        return (
          <div className="ml-5 mr-5 my-3">
            {this.state.foros.map(foro => <Foro key={ foro.id } foro = { foro } />)}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { loginAccountInfo: state.loginAccountInfo };
};

export default connect(mapStateToProps)(MisForos);
 

