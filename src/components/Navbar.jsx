import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isExpired, decodeToken } from "react-jwt";

const Navbar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    const token = decodeToken(localStorage.getItem("token"));

    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${token.userId}`,
      data: { userId: token.userId },
    })
      .then((response) => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const isNotLog = isExpired(localStorage.getItem("token"));

  return (
    <div className='navbar'>

      <h1><Link to="/" className='noLink'><p className='noLink'>Movie Base</p></Link></h1>

        <input type="text" className='form-navbar' placeholder='Wyszukaj'/>

                {!isNotLog && (
                <>
                <Link to="/addmovie" className='loginBtn'>Dodaj film</Link>
                <Link className='loginBtn' onClick={logOut}>Wyloguj</Link>
                </>

                )}
        {isNotLog && (
        <>
        <Link to="/login" className='loginBtn'>Zaloguj się</Link>
        <Link to="/register" className='login-registration'>Zarejestruj się</Link>
        </>
        )}

    </div>
  );
}

export default Navbar;