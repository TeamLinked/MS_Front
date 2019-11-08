import React from "react";

class TypeMsj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ''
    };
  }

  enviarMsg(msg) {
    const query = `
      mutation{
        SendMessage(input:{
          transmitter: "1"
          receiver: "2"
          message: "${msg}"
        }){
          transmitter
          receiver
          message
        }
      }
    `;
    const url =
      "https://cors-anywhere.herokuapp.com/http://34.94.59.230:3050/graphql";
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
        console.log(e);
        this.forceUpdate();
      })
      .catch(console.error);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(this.state.textField);
      this.enviarMsg(this.state.textField);
      this.setState({ textField: ''});
    }
  }

  render() {
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            placeholder="Escribe un mensaje..."
            value={this.state.textField}
            onKeyDown={this.handleKeyDown}
            onChange={(e) => this.setState({ textField: e.target.value })}
          />
          <button className="msg_send_btn" type="button">
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TypeMsj;
