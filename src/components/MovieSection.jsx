import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MovieSection = ({image, title, content, id}) => {

  return (

 <div className='movie-section'>
<div className="card mb-3" id="box">
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <button id="buttonStyle" type="submit"><Link id="buttonStyle" to={`moviedetails/${id}`}>Więcej szczegółów</Link></button>
    <p clasName="card-text">{content}</p>
  </div>
</div>

</div>
  )
}

export default MovieSection;