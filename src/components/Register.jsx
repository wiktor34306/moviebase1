import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Register = () => {

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
              <p class="text-white-50 mb-5"></p>

              <div class="form-outline form-white mb-4">
                <input type="login" id="typeLoginX" class="form-control form-control-lg" />
                <label class="form-label" for="typeLoginX">Login</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="name" id="typeNameX" class="form-control form-control-lg" />
                <label class="form-label" for="typeNameX">Nazwa</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Adres e-mail</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Hasło</label>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Zarejestruj mnie</button>

            </div>

            <div>
              <p class="mb-0">Masz już konto? <Link to='/login' class="text-white-50 fw-bold">Zaloguj się</Link>
              </p>
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