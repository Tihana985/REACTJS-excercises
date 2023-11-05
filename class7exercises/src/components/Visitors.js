import React from 'react';
import { MovieContext } from '../App';


export const Visitors = () => {
    const context = React.useContext(MovieContext);
    console.log(context);


    return(
        <div>
            <p>Our Visitors</p>
            <ul>
            {context.map((username, index) => (
                    <li key={index}>{username}</li>
                ))}
    
      </ul>            
     </div>

    );
};