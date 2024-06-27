// INI CONTOH MEMBUAT COMPONENT DENGAN MENGGUNAKAN CLASS

import React from "react";
import "../styles/Footer.c";
import { Button } from "@nextui-org/react";

class Footer extends React.Component {
  state = {
    message: "Hello World",
  };


  // ini contoh penggunaan componentDidMount() dimana setelah proses mount terjadi baru methodnya akan terpanggil.
  componentDidMount() {
    this.alertUser();
  };

  alertUser = () => {
    alert("DID MOUNT");
  };


  // ini contoh penggunaan componentDidUpdate() dimana setelah proses updatenya selesai maka did akan baru terpanggil.
  componentDidUpdate() {
    alert("DID UPDATE");
  };

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };

  // ini contoh penggunaan componentWillUnmount(); dimana sebelum sebuah component di cabut / di hilangkan.
componentWillUnmount() {
    alert("Goodbye")
}

  render() {
    return (
      <footer>
        <h3 className="footer-text">My Footer</h3>
        <p>{this.props.message}</p>
        <p>{this.state.message}</p>
        <Button onClick={this.changeMessage}>Change Message</Button>
      </footer>
    );
  }
}

export default Footer;
