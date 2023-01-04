import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

      <h1><Link to="/" className='noLink'><p className='noLink'>Movie Base</p></Link></h1>

        <input type="text" className='form-navbar' placeholder='Wyszukaj'/>

        <Link to="/addmovie" className='loginBtn'>Dodaj film</Link>
        <Link to="/login" className='loginBtn'>Zaloguj się</Link>
        <Link to="/register" className='login-registration'>Zarejestruj się</Link>

    </div>
  );
}

export default Navbar;