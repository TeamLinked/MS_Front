import React from "react";

class TypeMsj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ''
    };
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(this.state.textField);
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
