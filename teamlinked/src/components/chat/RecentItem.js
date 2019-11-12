import React, { Component } from "react";

class RecentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: "",
      isActive: false,
      idAmigo: this.props.id
    };
  }

  componentDidMount() {
    this.setState({isActive: this.props.isActive})
    console.log(this.state.isActive);
    this.revisarSiActivo();
  }

  revisarSiActivo() {
    if (this.state.isActive) {
      this.setState({ activeChat: "active_chat" });
    } else {
      this.setState({ activeChat: "" });
    }
  }
  handleClick = e => {
    let aux = this.state.isActive;
    this.setState({isActive: !aux});
    this.revisarSiActivo();
    this.props.handleClick(this.state.idAmigo);
  }

  render() {
    return (
      <div className={`chat_list ${this.state.activeChat}`} onClick={this.handleClick}>
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
