import './App.css';
import './components/components.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MovieSection from './components/MovieSection';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://at.usermd.net/api/movies')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>

    <Navbar />

      {data.map(item => (
        <MovieSection 
          id={item.id} 
          title={item.title}
          image={item.image}
          content={item.content} />
       ))}
      <Footer />
    </>
  );
};

export default App;
