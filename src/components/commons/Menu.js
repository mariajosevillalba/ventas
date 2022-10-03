import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className="panel">
      <p className="panel-heading has-background-info-light is-align-content-center">Menu</p>
      <div className="panel-bloc">
        <Link to="/" className="button is-fullwidth">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span>Inicio</span>
        </Link>
      </div>
      <div className="panel-bloc">
        <Link to="/Clientes" className="button is-fullwidth">
          <span className="icon">
            <i className="fas fa-users"></i>
          </span>
          <span>Clientes</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
