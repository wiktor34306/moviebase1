import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";

const MovieSection = ({imgPath, title, description, directors, casts, genre, grade, year}) => {

  return (

 <div className='movie-section'>
<div className="card mb-3">
  <img src={imgPath} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"><small class="text-muted">{grade}</small></p>
    <p className="card-text"><small class="text-muted"><Link to='/moviedetails'>Szczegóły filmu</Link></small></p>
    <p clasName="card-text">{description}</p>
    <p className="card-text"><small class="text-muted"><b>Reżyseria:</b> {directors}</small></p>
    <p className="card-text"><small class="text-muted"><b>Obsada:</b> {casts}</small></p>
        <p className="card-text"><small class="text-muted"><b>Gatunek:</b> {genre}</small></p>
        <p className="card-text"><small class="text-muted"><b>Rok produkcji:</b> {year}</small></p>
  </div>
</div>

</div>
  )
}

export default MovieSection;