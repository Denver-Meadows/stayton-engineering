import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.Fragment>
    <AppProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </AppProvider>
  </React.Fragment>,
  document.getElementById("root")
);
