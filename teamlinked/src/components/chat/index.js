import React, { Component } from 'react';

import MsjHistory from "./MsjHistory";
import Recents from "./Recents";

import '../../styles/Chat.css'; 


class MiChat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="App">
            <div className="container">
              <div className="messaging">
                <div className="inbox_msg">
                  <Recents />
                  <MsjHistory />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default MiChat;
