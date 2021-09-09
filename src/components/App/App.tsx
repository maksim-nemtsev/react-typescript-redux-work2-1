import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Routes } from "../../routes";

interface Props {}

const App = (props: Props) => {
  return (
    <Container fluid="lg" className="App-Container">
      <Routes />
    </Container>
  );
};

export default App;
