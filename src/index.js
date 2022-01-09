import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Display from "./components/onlineTest/mainComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Display />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
