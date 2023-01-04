import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
    return (

        // <div className="App">
        /* <div className='top-side'> */
      // <Logo />
      //     <Navbar />
        /* </div> */
        <> 
<Navbar />
        <section class="vh-100 gradient-custom" className="movie-section">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                  <div class="card-body p-5 text-center">
        
                    <div class="mb-md-5 mt-md-4 pb-5">
        
                      <h2 class="fw-bold mb-2 text-uppercase">Logowanie</h2>
                      <p class="text-white-50 mb-5">Wprowadź login i hasło!</p>
        
                      <div class="form-outline form-white mb-4">
                        <input type="login" id="typeLoginX" class="form-control form-control-lg" />
                        <label class="form-label" for="typeLoginX">Login</label>
                    </div>
        
                      <div class="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                        <label class="form-label" for="typePasswordX">Hasło</label>
                      </div>
        
                      <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Zapomniałeś hasła?</a></p>
        
                      <button class="btn btn-outline-light btn-lg px-5" type="submit">Zaloguj</button>
        
                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                      </div>
        
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