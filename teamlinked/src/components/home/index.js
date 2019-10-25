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

    // componentDidMount() {
    //     axios.get(`http://35.198.21.214:3050/graphql`,
    //         { 
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }}
    //     )    
    //       .then(res => {
    //         console.log(res)
    //         const foros = res.data;
    //         this.setState({ foros });
    //     })
    // }
 
    pedirForos() {
        console.log('Estoy en la funcion pedir foros')
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
        const url = "https://cors-anywhere.herokuapp.com/http://35.198.21.214:3050/graphql";

        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ query })
        };

        fetch(url, opts)
        .then(res => { res.json()
            console.log(res);   
        })
        .then(e => {
            console.log(e)
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

