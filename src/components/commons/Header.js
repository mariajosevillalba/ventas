import React from 'react';
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';

const Header = () => {

   return(

    <div className="navbar is-warning">
      <div className="navbar-brand">
        <Link to ="/" className='navbar-item'>
          <img src="logoventas.png" alt="logo"/>
        </Link>
        
      </div>
    </div>


   );
}
  
  export default Header;