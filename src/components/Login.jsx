import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
const [Name, SetName] = useState("");
const [Password, SetPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
let navigate = useNavigate();
const register = (e) => {
e.preventDefault();
axios({
method: "post",
url: "https://at.usermd.net/api/user/auth",
data: { login: Name, password: Password },
})
.then((response) => {
localStorage.setItem("token", response.data.token);
navigate("/");
})
.catch((error) => {
console.log(error);
setErrorMessage("Invalid Login or Password");
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
                  <form>
                  <h2 class="fw-bold mb-2 text-uppercase">Logowanie</h2>
                  <p class="text-white-50 mb-5">Wprowadź login i hasło!</p>
                  <img src={require('../../src/assets/pics/enter.png')} style={{width: "100px", height: "100px"}} alt="Login"/>
                  <br></br>
                  {errorMessage && (
                        <div  role="alert" style={{color: "red"}}>
                          <br></br>
                          Podano nieprawidłowy login bądź hasło
                        </div>
                  )}
                  <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeLoginX">Login / Nazwa</label>
                    <input type="login" id="typeLoginX" name="login" class="form-control form-control-lg" value={Name} onChange={(e) => SetName(e.target.value)}/>
                </div>
    
                  <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Hasło</label>
                    <input type="password" id="typePasswordX" name="password" class="form-control form-control-lg" value={Password} onChange={(e) => SetPassword(e.target.value)} />
                  </div>        
                      <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={register}>Zaloguj</button>
                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                      </div>
                      </form>
                    </div>
        
                    <div>
                      <p class="mb-0">Nie masz konta? <Link to='/register' class="text-white-50 fw-bold">Zarejestruj się</Link>
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          </section>
</>
        /* </div> */

        );
}


export default Login;