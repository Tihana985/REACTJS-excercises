import logo from './logo.svg';
import './App.css';
import {Student} from "./components/Student";
import { Semester } from './components/Semester';



function App() {

  // Da napraime komponenta student koja kje ima ime/prezime / index
// neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
// i taa lista da se prakja kako props od app.js
// da prakame pokraj listata uste property koe kje bide nekoj
// semestar i neka toj semestar se pokazuva na ekranot vo nekoj
//  h1 element vednas posle tabelata
// Da stavime PropTypes na listata od studenti i neka taa lista bide
// required, neka ima propTypes i za semestarot
// Ako slucajno semestarot ne e praten, sekogas da se ispisuva
// tekstot zimski

  let studenti = [
    {ime: "Tanja", prezime:"Trajkov", index:"111"},
    {ime: "Sanja", prezime:"Trajkova", index:"222"},
    {ime: "Vanja", prezime:"Trajanovska", index:"333"}
  ];
  
  return (
    <div className="App">
      <h1>Students</h1>
      <h2>Semester</h2>
  
      <Student students = {studenti} /> 
      <Semester showSemester = {true} />
     
    </div>
  );
  }

export default App;
