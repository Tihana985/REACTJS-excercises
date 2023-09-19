

  // Da napravime komponenta vo koja kje prikazuvame
  // komentari, neka sekoj komentar ima id, author,
  // text. Neka listata so komentari ja imate vo
  // app.js i pratite preku props vo kreiranata
  // komponenta i tamu da gi prikazime informaciite
  // neka bidat vo nekoja tabela
  // pokraj ova imate nekoe kopce LIKE sto vo
  // konzola kje pecati +1





import logo from './logo.svg';
import './App.css';
import {Comments} from './components/Comments';
import  {CommentsClass}  from './components/CommentsClass';


function App() {
  let comments = [
  
      {Id: "1", author:"Martin", text: "Text1"},
      {Id: "2", author:"Ana", text: "Text2"},
      {Id: "3", author:"Aleks", text: "Text3"},
      {Id: "4", author:"Iva", text: "Text4"},
    ]
  


return (
  <div className="App">
     <h1>Table with comments</h1>
<Comments comments = {comments} /> 

 <CommentsClass comments = {comments} /> 
    </div>
);
}

export default App;
