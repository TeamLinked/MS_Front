import React, { Component } from "react";

class RecentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: "",
      isActive: this.props.isActive
    };
  }

  componentDidMount() {
    this.revisarSiActivo();
  }

  revisarSiActivo() {
    if (this.state.isActive) {
      this.setState({ activeChat: "active_chat" });
    } else {
      this.setState({ activeChat: "" });
    }
  }

  render() {
    return (
      <div className={`chat_list ${this.state.activeChat}`}>
        <div className="chat_people">
          <div className="chat_ib">
            <h5>
              {this.props.name}{" "}
              <span className="chat_date">{this.props.date}</span>
            </h5>
            <p>{this.props.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentItem;
