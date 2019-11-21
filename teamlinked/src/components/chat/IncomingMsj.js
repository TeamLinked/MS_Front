import React from "react";

class IncomingMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="incoming_msg">
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{this.props.bodyMsj}</p>
            <span className="time_date">{this.props.timestamp}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomingMsg;
