import React, { Component } from "react";
import RecentItem from "./RecentItem";

class Recents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="inbox_people">
        <div className="headind_srch">
          <div className="recent_heading">
            <h4>Recientes</h4>
          </div>
        </div>
        <div className="inbox_chat">
          {/* <RecentItem
            name="Yarid"
            date="13 Jun"
            message="Vista previa del mensaje"
            isActive={true}
          />
          <RecentItem
            name="Ivan"
            date="13 Jun"
            message="Vista previa del mensaje"
            isActive={false}
          />
          <RecentItem
            name="Andres"
            date="13 Jun"
            message="Vista previa del mensaje"
            isActive={false}
          /> */}
        </div>
      </div>
    );
  }
}

export default Recents;
