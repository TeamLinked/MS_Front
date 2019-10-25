import React from "react";
import Amigo from "./Amigo";

class MiRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm container">
        <h2 className="border-bottom pb-2 mb-0">Tu Red</h2>
        {this.props.personas.map(p => (
          <Amigo persona={p} />
        ))}
      </div>
    );
  }
}

export default MiRed;
