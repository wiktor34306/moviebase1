import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className='input-group'> 
        <input type="text" className='form-navbar' placeholder='Wyszukaj'/>

    {/* <div className='buttons'> */}
        <button type='button' className='loginBtn'>Zaloguj się</button>
        <button type='button' className='login-registration'>Zarejestruj się</button>
    {/* </div> */}
    </div>
    </div>

  )
}

export default Navbar;