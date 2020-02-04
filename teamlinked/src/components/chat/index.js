import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Chat from "./Chat";

import '../../styles/Chat.css'; 


class Index extends Component {
  render() {
    return ( 
      
      <div className="App">
        <br></br>
        <div className="container">
          <div className="messaging">
            <Card>
              <Chat />
            </Card> 
          </div>
        </div>
      </div>
      
    );
  }
}
 
export default Index;
