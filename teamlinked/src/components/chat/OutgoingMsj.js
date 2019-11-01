import React from "react";

class OutgoingMsj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{this.props.bodyMsj}</p>
          <span className="time_date">{this.props.timestamp}</span>{" "}
        </div>
      </div>
    );
  }
}

export default OutgoingMsj;
