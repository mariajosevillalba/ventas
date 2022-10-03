import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import {ModalContextProvider} from "../../contexts/modal/ModalContexts";

const Layout = (props) => {
  return (
    <ModalContextProvider>
      <div>
        <Header />
        <br></br>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div>
            <div className="column">{props.children}</div>
          </div>
        </div>
      </div>
    </ModalContextProvider>
  );
};

export default Layout;
