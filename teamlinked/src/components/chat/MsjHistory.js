import React from "react";
import IncomingMsj from "./IncomingMsj";
import OutgoingMsj from "./OutgoingMsj";
import TypeMsj from "./TypeMsj";

class MsjHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  mostrarMsgEnChat(m) {
    if(m.transmitter === "1"){
      return <OutgoingMsj bodyMsj={m.message} timestamp={"11:00, June 9"} />
    }else{
      return <IncomingMsj bodyMsj={m.message} timestamp={"11:00, June 9"} />
    }
  }
  render() {
    return (
      <div className="mesgs">
        <div className="msg_history">
          {this.props.mensajesRaw.map(m => (
            this.mostrarMsgEnChat(m)
          ))}
        </div>
        <TypeMsj />
      </div>
    );
  }
}

export default MsjHistory;
