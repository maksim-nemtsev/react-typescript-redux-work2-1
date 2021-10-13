import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Routes } from "../../routes";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import WebApi from "../../api/WebApi";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authReducer } from "./AppSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const App: React.FC = () => {
  const authState = useAppSelector((state) => state.authData.isAuth);
  console.log("🚀 ~ file: App.tsx ~ line 12 ~ authState", authState);
  const dispatch = useAppDispatch();
  const [auth] = useState(true);
  WebApi.setPathPrefix("api/v1");

  return (
    <Container fluid="lg" className="App-Container">
      {!auth && <NavigationMenu auth={auth} />}

      {auth && <Routes />}
    </Container>
  );
};

export default App;
