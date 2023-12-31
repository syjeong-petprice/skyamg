import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
        <Router>
          <App />
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
