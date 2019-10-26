import React, { Component } from 'react';
import axios from 'axios';
import Foro from '../foros/Foro'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            foros: []
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
        const url = "http://34.94.59.230:3050/graphql";

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
        return (
            <div>
                { this.state.foros.map(foro => <Foro key={foro.id} foro={foro} />)}
            </div>
        )
    }
}
 
export default Home;

