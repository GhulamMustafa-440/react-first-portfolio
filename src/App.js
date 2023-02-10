import React from "react";
import Router from "./config/routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css"
import "./App.css"
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router />
      <Footer />
    </>
  );
}

export default App;
