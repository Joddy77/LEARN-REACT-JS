// INI CONTOH MEMBUAT COMPONENT DENGAN MENGGUNAKAN CLASS

import React from "react";
import "../styles/Footer.css";
import { Button } from "@nextui-org/react";
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";

class Footer extends React.Component {
  state = {
    message: "Hello World",
  };

  alertUser = () => {
    alert("DID MOUNT");
  };

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };


  render() {
    return (
      <footer>
        <h3 className="footer-text">My Footer</h3>
        <p>{this.props.message}</p>
        <p>{this.props.propsTambahan}</p>
        <p>{this.state.message}</p>
        <Button onClick={this.changeMessage}>Change Message</Button>
      </footer>
    );
  }
}

export default withBackground(Footer);
