import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import MovieSection from './components/MovieSection';

function App() {

  const movies = [
    {
      title: "Ring",
      imgPath: "https://fwcdn.pl/fpo/45/65/34565/7531778.3.jpg",
      description: "Reporterka trafia na ślad kasety wideo, z powodu której giną kolejni ludzie.",
      directors: "Gore Verbinski",
      genre: "Horror",
      casts: "Naomi Watts, Martin Henderson, David Dorfman, Brian Cox, Jane Alexander, Lindsay Frost, Amber Tamblyn, Rachael Bella, Daveigh Chase",
      grade: "6,9/10",
      year: "2002",
    },
    {
      title: "Wielka Woda",
      imgPath: "https://fwcdn.pl/fpo/18/16/871816/8042652.3.jpg",
      description: "Wrocław, rok 1997. Naukowcy i lokalne władze muszą podjąć szereg niewyobrażalnie trudnych decyzji, gdy do miasta zbliża się potężna fala powodziowa.",
      directors: "Jan Holoubek, Bartłomiej Ignaciuk",
      genre: "Dramat, Katastroficzny",
      casts: "Agnieszka Żulewska, Tomasz Schuchardt, Ireneusz Czop, Jerzy Trela, Anna Dymna, Blanka Kot, Marta Nieradkiewicz, Mirosław Kropielnicki, Lech Dyblik",
      grade: "7,6/10",
      year: "2022",
    },
    {
      title: "Już Nie Żyjesz",
      imgPath: "https://fwcdn.pl/fpo/01/89/810189/7919545.3.jpg",
      description: "Potężna przyjaźń łączy wiecznie zestresowaną wdowę i pięknoducha z przerażającą tajemnicą na koncie.",
      directors: "Liz Feldman",
      genre: "Dramat",
      casts: "Christina Applegate, Linda Cardellini, James Marsden, Max Jenkins, Luke Roessler, Edward Asner, Sam McCarthy, Diana Maria Riva, Keong Sim",
      grade: "7,3/10",
      year: "2019",
    },
  ]

  return (

    <div className="App">
      <div className='top-side'>
    <Logo />
        <Navbar />
      </div>
      <div className='movie-section-fill'>
        {movies.map((movie) => <MovieSection imgPath={movie.imgPath} title={movie.title} description={movie.description} directors={movie.directors} genre={movie.genre} casts={movie.casts} grade={movie.grade} year={movie.year}/> )}
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
