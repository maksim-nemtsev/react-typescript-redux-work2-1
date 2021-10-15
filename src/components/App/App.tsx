import React, { useEffect } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Routes } from "../../routes";
import WebApi from "../../api/WebApi";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { reqAuthData } from "./AppSliceAuthData";
import { reqInitData } from "./AppSliceInitData";

const App: React.FC = () => {
  // const userTarrifId = useAppSelector(
  //   (state) => state.authData.userInfo.tariffId
  // );
  const userInitData = useAppSelector((state) => console.log(state));
  console.log("🚀 ~ file: App.tsx ~ line 15 ~ userInitData", userInitData);

  const dispatch = useAppDispatch();
  WebApi.setPathPrefix("api/v1");

  useEffect(() => {
    WebApi.userInfo().then((data) => {
      dispatch(reqAuthData(data.data));
      WebApi.initData().then((data) => {
        dispatch(reqInitData(data.data));
      });
    });
  }, [dispatch]);

  return (
    <Container fluid="lg" className="App-Container">
      <Routes />
    </Container>
  );
};

export default App;
