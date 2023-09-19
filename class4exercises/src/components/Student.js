// Da napraime komponenta student koja kje ima ime/prezime / index
// neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
// i taa lista da se prakja kako props od app.js
// da prakame pokraj listata uste property koe kje bide nekoj
// semestar i neka toj semestar se pokazuva na ekranot vo nekoj
//  h1 element vednas posle tabelata
// Da stavime PropTypes na listata od studenti i neka taa lista bide
// required, neka ima propTypes i za semestarot
// Ako slucajno semestarot ne e praten, sekogas da se ispisuva
// // tekstot zimski
// <Student student ={studenti} /> 

import PropTypes from "prop-types";
import { Semester } from "./Semester";
export function Student (props) {

    console.log(props);

    
  
    return (
        <div> 
            {
                props.students.map ((objectsofstudents, index) => {
                    //students e imeto na objektot koj e vo props
                    //objectofstudents e vsuhnost imeto na objektite od nizata studenti
                    return(
                    <table>
                        <thead>
                        <tr> 
                            <th>IME</th>
                            <th>PREZIME</th>
                            <th>INDEX</th>
                        
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> {objectsofstudents.ime}</td>
                            <td>{objectsofstudents.prezime}</td>
                            <td>{objectsofstudents.index}</td>
                        </tr>
                        </tbody>
                    </table>
                    );
                })}

    </div>
);
}


Student.propTypes = { 
    students: PropTypes.arrayOf(PropTypes.object).isRequired,

};
   