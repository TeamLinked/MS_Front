import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        foros: []
    }
    componentDidMount() {
        axios.get(`http://35.198.21.214:8000/foros/`)
          .then(res => {
            const foros = res.data;
            console.log(foros);
            this.setState({ foros });
        })
    }
    
    render() {
        return (
            <ul>
                { this.state.foros.map(foro => <li>{foro.titulo}</li>)}
            </ul>
        )
    }
}
 
export default Home;