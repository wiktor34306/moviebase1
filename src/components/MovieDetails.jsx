import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = () => {
  let nav = useNavigate();
  const {id} = useParams(); // pobiera id z 25 linijki z App.js
  const takeDetails = () => {
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies/${id}`
    })
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  };

  const [Movie, setMovie] = useState({});
  useEffect(() => {
    takeDetails();
  }, []);

  const deleteMovie = () => {
      axios({
          method: "delete",
          url: `https://at.usermd.net/api/movie/${id}`
      })
      .then((response) => nav("/"))
      .catch((error) => console.log(error));
  }

    return (
        <> 
<Navbar />
        <section class="vh-100 gradient-custom" className="movie-section">
          <br></br>
          <button id="buttonStyle" type="submit" className="buttonStyleBack"><Link to="/" id="buttonStyle" className="buttonStyleBack">Wróć do strony głównej</Link></button>
          <div className='movie-section'>
            <div className="card mb-3" id="box">
              <img src={Movie.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{Movie.title}</h5>
                <p className="card-text">{Movie.content}</p>
                <button id="buttonStyle" type="submit" onClick={deleteMovie}>Usuń film</button>
                
              </div>
            </div>
</div>
          </section>
</>

        );
}


export default MovieDetails;