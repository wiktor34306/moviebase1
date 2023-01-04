import React from "react";
import Navbar from "./Navbar";

const MovieDetails = () => {
    return (
        <> 
<Navbar />
        <section class="vh-100 gradient-custom" className="movie-section">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5" style={{height: "700px"}}>
              <p>Szczegóły filmu</p>
              </div>
            </div>
          </div>
          </section>
</>

        );
}


export default MovieDetails;