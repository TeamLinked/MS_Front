import React, { Component } from 'react';
import PaginaInicial from './PagInicial';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <PaginaInicial/>
            </React.Fragment>
        );
    }
}
 
export default Home;