import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import axios from 'axios';

const AddMovie = () => {
const [movieData, setMovieData] = useState({ // hook
id: "",
title: "",
image: "",
content: ""
});
const [successMessage, setSuccessMessage] = useState(''); //hook
const [errorMessage, setErrorMessage] = useState(''); //hook

const handleChange = e => {
setMovieData({...movieData, [e.target.name]: e.target.value });
};

const buttonSubmit = e => {
e.preventDefault();
axios.post('https://at.usermd.net/api/movies', movieData)
.then(res => {
setSuccessMessage('Film został dodany');
setMovieData({
id: "",
title: "",
image: "",
content: ""
});
})
.catch(err => {
setErrorMessage('Wystąpił błąd podczas dodawania filmu');
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

          <h2 class="fw-bold mb-2 text-uppercase">Dodawanie <br></br>filmu / serialu</h2>
          <p class="text-white-50 mb-5">Podaj dane filmu / serialu, który chcesz dodać</p>
          <img src={require('../..//src/assets/pics/clapperboard.png')} style={{width: "100px", height: "100px"}} alt="Movie" />
          <p class="text-white-50 mb-5"></p>
        
          <form onSubmit={buttonSubmit}>
              
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeTitleX">Tytuł</label>
                <textarea type="title" id="typeTitleX" class="form-control form-control-lg" name="title" value={movieData.title} onChange={handleChange}/>
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX">Link do zdjęcia</label>
                <textarea type="text" id="typePasswordX" class="form-control form-control-lg" name="image" value={movieData.image} onChange={handleChange} />
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX">Opis</label>
                <textarea rows="6" cols="70" id="typePasswordX" class="form-control form-control-lg" name="content" value={movieData.content} onChange={handleChange}/>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Dodaj</button>
              <br></br>
              <br></br>
              {successMessage && (
            <div class="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div class="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

              </form>
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

export default AddMovie;