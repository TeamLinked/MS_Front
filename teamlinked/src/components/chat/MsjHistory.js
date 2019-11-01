import React from "react";
import IncomingMsj from "./IncomingMsj";
import OutgoingMsj from "./OutgoingMsj";
import TypeMsj from "./TypeMsj";

class MsjHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mesgs">
        <div className="msg_history">
          <IncomingMsj bodyMsj="Buen día" timestamp={"11:00, June 9"} />
          <IncomingMsj bodyMsj="Cómo estás?" timestamp={"11:00, June 9"} />
          <OutgoingMsj bodyMsj="Bien, gracias" timestamp={"11:00, June 9"} />
          <OutgoingMsj bodyMsj="Y tú?" timestamp={"11:00, June 9"} />
        </div>
        <TypeMsj />
      </div>
    );
  }
}

export default MsjHistory;
