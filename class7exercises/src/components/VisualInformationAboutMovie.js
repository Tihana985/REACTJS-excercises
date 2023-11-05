import React from "react";
import {MovieContext} from "../App";

export const VisualInformationAboutMovie = () => {
    const visual = React.useContext(MovieContext);
    console.log(visual)
    return(
        <div>
            <a href ={visual.linkToMovie}>Link to Movie</a>
            <br></br>
            {visual.images.map((image, i) => (
        <img key={i} src={image} style={{ width: 300, height: 250 }}/>
      ))}
        </div>
    );
};