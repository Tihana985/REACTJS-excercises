import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Movie} from './components/Movie.js';
import{Visitors} from './components/Visitors.js';

//Neka imate nekoj objekt movie koj vnatre kje ima lista od sliki (barem 3), od nekoj film sto 
// kje go najdete na internet, i potoa neka ima za filmot rating, zanr, plot, releaseDate,
// linkToTheTrailer.
// Potoa Kreirajte nekoja komponenta Movie.js, vo koja samo kje prikazite 2 drugi komponenti 
// koj kje gi kreirate so ime informationAboutMovie.js i vnatre kje gi prikazite
// site informacii za filmot, osven slikite i linkot a potoa kje kreirate nekoja komponenta 
// koja kje bide VisualInformationAboutMovie.js, vo koja kje gi pokazete site sliki
// i linkot do trailerot, no ovoj objekt movie da bide kreiran vo app.js i praten preku kontekst 
// a potoa vo Information i VisualInformation da se zemaat informaciite za filmot
// i da se prikazat vo soodvetniot html.

// BONUS: Da napravime i uste edna komponenta visitors, on the site, vo koja kje prikazeme 
//nekoja lista od usernames koja kje bide pratena od app.js preku contekstot.

//Kreiranje na React context
export const MovieContext = React.createContext();


function App() {

const movie = {
  name : "Harry Potter and the Philosopher's Stone",
  rating : "7,6/10", 
  zanr:"Fantasy/Adventure",
  plot:"Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
  realeseDate:"November 14, 2001",
  linkToMovie: "https://www.imdb.com/title/tt0241527/",
  images: [
    "https://images.moviesanywhere.com/3d899a3e03eb1e3684a903168b601f47/1707fb29-a315-4f96-8dce-3b9fb5fbc219.jpg?r=3x1&w=2400",
    "https://blog.seetickets.com/wp-content/uploads/HP1-INTL-Film-Stills-2-1-940x621.jpg",
    "https://images.ctfassets.net/usf1vwtuqyxm/2ALpKvBMkEBbw6qL3BfOVV/28e0d10b59b62e9bb64af6236d5578a8/HP-F1-philosophers-stone-harry-ron-hermione-courtyard-happy-web-landscape?w=768&q=70&fm=webp"
  ]
  };

  const userNames = ["user1", "user2", "user3"
];

  return (
    <div className="App">
      <h1>Exercises Class 7</h1>  
      {/* //obvitkuvanje na komponentata so React context */}
      <MovieContext.Provider value={movie}>
   <Movie />
   </MovieContext.Provider>
   
   <MovieContext.Provider value={userNames}>
    <Visitors />
   </MovieContext.Provider>
   </div>
  );
}

export default App;
