import React from "react";
import {Link} from 'react-router-dom';
const Menu  = (props) => {
    return (  
        <nav className="panel">
            <p className="panel-heading">Menu</p>
            <div className="panel-block">
                <Link to ="/" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    <span>
                        Inicio
                    </span>
                </Link>
            </div>
            <div className="panel-block">
                <Link to ="/" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    <span>
                        Clientes
                    </span>
                </Link>
            </div>
        </nav>


    );
}
 
export default Menu;