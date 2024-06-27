// INI CONTOH MEMBUAT COMPONENT DENGANG MENGGUNAKAN FUNCTION

import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";

const Header = () => {
  const [message, setMessage] = useState("Hello World");

  // // SAMA SEPERTI componentDidMount DI DALAM CLASS
  // useEffect(() => {
  //     alertUser();
  // } ,[]); // TETAPI ARRAY HARUS KOSONG

  // // SAMA SEPERTI componentWillUnmount DI DALAM CLASS
  // useEffect(() => {
  //     return () => { // HARUS MENGGUNAKAN RETURN
  //         alert("WILL UNMOUNT");
  //     };
  // } ,[]);

  // BISA JUGA DI JADIKAN SATU CONTOHNYA SEPERTI INI.
  useEffect(() => {
    alertUser();

    return () => {
      alert("DID UNMOUNT");
    };
  }, []);

  // SAMA SEPERTI componentDidUpdate DI DALAM CLASS 
  useEffect(() => {
    alert("DID UPDATE");
  }, [message]); // ARRAY HARUS DI ISI SESUAI DENGAN VALUE YANG BERUBAH 

  const alertUser = () => {
    alert("DID MOUNT");
  };

  const changeMessage = () => {
    setMessage("State Changed")
  }

  return (
    <header
      style={{
        backgroundColor: "darkgray",
        padding: "8px",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Heading>My Header</Heading>
      <p>{message}</p>
      <Button onClick={changeMessage}>Change Message</Button>
    </header>
  );
};

export default Header;
