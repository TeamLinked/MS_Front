import React, { Component } from 'react';
// import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
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
        imagen: ''
      }
    
    pedirForosPorUsuario() {
        const query = `
        query {
            findForoCreador(creador: ` + this.props.loginAccountInfo.id + `) {
              id
              titulo
              contenido
              categoria
              imagen
              id_creador
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
            console.log(e)
            this.setState({ foros: e.data.findForoCreador });
            console.log("estos son los foros: ", e.data.findForoCreador);
        })
        .catch(console.error);
    }

    componentDidMount() {
        this.pedirForosPorUsuario();
    }

    render() {
        return (
          <Card>
            {/* <Card.Img class="center-cropped" variant="top" src={this.pic(this.props.foro.imagen)} />
                {console.log(localStorage.state.loginAccountInfo.id)}
            <Card.Body>
                  <Card.Text>
                    <Card.Title>{this.props.foro.titulo}</Card.Title>
                    {this.props.foro.contenido}
                </Card.Text>
                <div className="update ml-auto mr-auto" align="center">
                    <Button className="btn-round" color="primary" type="submit">
                        Participar
                    </Button>
                </div>
            </Card.Body>
            <Card.Footer>
                {console.log(this.props.foro.fechaCreacion)}
                <small className="text-muted">{this.props.foro.fecha_creacion} </small>
            </Card.Footer> */}
            {this.state.foros.map(foro => <Foro key={ foro.id } foro = { foro } />)}
          </Card>
        )
    }
}

const mapStateToProps = (state) => {
  return { loginAccountInfo: state.loginAccountInfo };
};

export default connect(mapStateToProps)(MisForos);
 

