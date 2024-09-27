import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { MovieInfo } from "./components/MovieInfo";
import { Movies} from "./components/Movies";
import { NewMovie } from "./components/NewMovie";
import { NotFound } from "./components/NotFound";
// Prodolzenie na primerot sto bese na casot za filmovi
// da dodademe nekoj novi komponenti kako NewMovie koja kje se renderira
// na pat /movies/new i vnatre da imate nekoja forma so 3 inputi 
// za imeto na filmot,zanrot i ratingot i tie da se cuvaat vo nekoj stejt
// koga kje se submitira formata da gi ispecatime vrednostite vo 
// konzola. Da imame i notfound komponenta kade sto kje imame 
// nekoj golem tekst 404 koj sto kje bide crveno 
// a pod nego da ima nekoj drug tekst the resource you are looking for
// is missing. 

// Da napravime i Movies komponenta koja kje prima lista od filmovi 
// i preku custom parametar vo rutite da prikazuvame poveke informacii
// za posebniot film. Da se prikaze listata od filmovi vo movies i 
// potoa so klik na sekoj od filmovite da se prikazat dopolnitelni 
// informacii. 

// imajte ja listata i vo movies i vo Movie komponenta

// BONUS: listat da bide samo vo app.js a preku props prakajte ja vo
// komponentite sto vi trebaat

const movies = [
  {id: 1, title: "The Wolf of Wall Street", genre: "Crime/Comedy", rating: 8.2, image: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"},  
  {id: 2, title: "Shutter Island", genre: "Triler", rating: 8.2, image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"},
  {id: 3, title: "Romeo + Juliet", genre: "Romance", rating: 6.7, image: "https://m.media-amazon.com/images/M/MV5BMGU4YmI1ZGQtZjExYi00M2E0LTgyYTAtNzQ5ZmVlMTk4NzUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"},
  {id: 4, title: "The Great Gatsby", genre: "Drama", rating: 8.8, image: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg"},
  {id: 5, title: "Catch me if you can", genre: "Crime/Comedy", rating: 7.2, image: "https://m.media-amazon.com/images/I/61salxOJ98L._AC_UF894,1000_QL80_.jpg"},
]




function App() {
  return (
    <div className="App">
      <nav>
        <Link className='link' to="/"><img className="navImg" src='/images/308229_home_icon.png'/></Link>
        <Link className='link' to="/movies"><img className="navImg" src='/images/285656_movie_icon.png'/></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies movies={movies}/>}/>
        <Route path="/movies/:id" element={<MovieInfo movies={movies}/>}/>
        <Route path="/movies/new" element={<NewMovie />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;