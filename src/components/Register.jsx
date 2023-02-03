import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [, setSuccess] = useState(null);
  const [, setMessage] = useState("");

  let navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: { name: Name, email: Email, password: Password },
    })
      .then((response) => navigate("/"))
      .catch((error) => {
        setSuccess(false);
        setMessage("Wystąpił błąd podczas rejestracji, podany e-mail już istnieje w bazie");
        });
        };

return (
<> 
<Navbar />
<section class="vh-100 gradient-custom" className="movie-section">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Rejestracja</h2>
              <form>
              <br></br>
              <img src={require('../../src/assets/pics/pop-up.png')} style={{width: "100px", height: "100px"}} alt="Logup" />
              <p class="text-white-50 mb-5"></p>

              <div class="form-outline form-white mb-4">
              <label class="form-label" for="typeLoginX">Login / Nazwa</label>
                <input type="login" id="typeLoginX" class="form-control form-control-lg" value={Name} onChange={(e) => SetName(e.target.value)} required/>
              </div>

              <div class="form-outline form-white mb-4">
              <label class="form-label" for="typeEmailX">Adres e-mail</label>
                <input type="email" id="typeEmailX" class="form-control form-control-lg" valule={Email} onChange={(e) => SetEmail(e.target.value)} required/>
              </div>

              <div class="form-outline form-white mb-4">
              <label class="form-label" for="typePasswordX">Hasło</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" value={Password} onChange={(e) => SetPassword(e.target.value)} required/>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={register}>Zarejestruj mnie</button>
              </form>
            </div>

            <div>
              <p class="mb-0">Masz już konto? <Link to='/login' class="text-white-50 fw-bold">Zaloguj się</Link></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
);
}

export default Register;