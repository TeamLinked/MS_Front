import React from "react";
import Amigo from "./Amigo";

class BuscaAmigos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="my-3 p-3 bg-white rounded shadow-sm container">
        <h2 className="border-bottom pb-2 mb-0">Busca a un compañero</h2>
        <div className="row">
          {this.props.children}
          <button type="button" className="btn btn-info col-md-2" onClick={() => this.props.buscar()}>Buscar</button>
        </div>
        {this.props.personas.map(p => (
          <Amigo persona={p} />
        ))}
      </div>
    );
  }
}

export default BuscaAmigos;