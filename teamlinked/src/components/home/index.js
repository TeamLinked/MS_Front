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

    componentDidMount() {
        axios.get(`http://localhost:8000/foros/`,
            { 
            headers: {
                'Access-Control-Allow-Origin': '*'
            }}
        )    
          .then(res => {
            const foros = res.data;
            // console.log(res.data);
            this.setState({ foros });
        })
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