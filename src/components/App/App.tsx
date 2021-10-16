import React, { useEffect } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Routes } from "../../routes";
import WebApi from "../../api/WebApi";
import { useAppDispatch } from "../../hooks/hooks";
import { reqAuthData } from "./AppSliceAuthData";
import { reqInitData } from "./AppSliceInitData";
import { reqFeedData } from "./AppSliceFeedData";
import { reqWorkSpaces } from "./AppSliceWorkSpaces";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  WebApi.setPathPrefix("api/v1");

  useEffect(() => {
    WebApi.userInfo().then((data) => {
      dispatch(reqAuthData(data.data));

      WebApi.initData()
        .then((data) => {
          dispatch(reqInitData(data.data));

          if (data.status === 200) {
            WebApi.getFeed()
              .then((data) => {
                dispatch(reqFeedData(data.data));
              })
              .catch((error) => {
                console.error("getFeed error", error);
              });
            WebApi.getWorkSpaces()
              .then((data) => {
                dispatch(reqWorkSpaces(data.data));
              })
              .catch((error) => {
                console.error("getWorkSpaces error", error);
              });
          }
        })
        .catch((error) => {
          console.error("error", error);
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
