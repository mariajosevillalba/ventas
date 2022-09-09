import React from "react";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import {BrowserRouter, Route,  Routes } from "react-router-dom";

function App  () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Clientes" element={<Clientes />}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
