import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Feed from "./Feed";
import PaginaPrincipal from './PaginaPrincipal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image : 'no info'
        }
    }
 
    pedirForos() {
        const query = `
        query {
            Foros {
                id
                titulo
                contenido
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
            // console.log(e)
            this.setState({ foros: e.data.Foros });
            console.log(e.data.Foros);
        })
        .catch(console.error);
    }

    componentDidMount() {
        this.pedirForos();
    }

    render() {

        if (this.props.loginAccountInfo){
            return(
                <div>
                    {/* { this.state.foros.map(foro => <Foro key={foro.id} foro={foro} />)} */}
                    <Feed/>
                </div> 
            )
        }
        return (
            <div>
                <PaginaPrincipal/>
            </div>
        )
    }
}

// Para conectar react con redux
var mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo};
};
  
export default connect(mapStateToProps)(Home);

