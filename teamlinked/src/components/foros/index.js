import React, { Component } from 'react';
import CreateForo from './CreacionForos'
import MisForos from './MisForos';

class Foros extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <MisForos/>
            </React.Fragment>
        );
    }
} 
 
export default Foros;