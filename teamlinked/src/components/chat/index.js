import React, { Component } from 'react';

import Chat from "./Chat";

import '../../styles/Chat.css'; 


class Index extends Component {
  render() {
    return (  
      <div className="App">
        <div className="container">
          <div className="messaging">
              <Chat />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Index;
