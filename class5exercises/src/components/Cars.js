import { useState, useEffect } from "react";


//Za domasna:
//Da napravime komponenta koja kje bide slicna na Movie.js komponentata.
//Da imame 4 sliki od avtomobili i pod sekoja slika da imame kopce like sto bi znacelo plus 1 glas za toj avtomobil. 
//Preku useEffect napravete da koga nekoj avtomobil kje stigne do 4 glasa se ispecati vo konzola deka e avtomobil na godinata.
//BONUS: Dokolku imate vreme
//Pod sekoj avtomobil da ima tri kopcinja ednoto like, drugoto dislike (-1 glass) i superLike (+2 glasa) i preku useEffect
// da se naprai da vo konzola se pecatat glasovite od site avtomobili no samo koga se glasa za 1 i 3 tiot avtomobil

export const Cars = () => {

    const [car1likes, setcar1likes] = useState(0);
    const [car2likes, setcar2likes] = useState(0);
    const [car3likes, setcar3likes] = useState(0);
    const [car4likes, setcar4likes] = useState(0);
  

    useEffect(() => {
        console.log("Voting");
        if (car1likes === 4) {
          console.log( "This car is the winner of the year!");
        }
    
        if (car2likes === 4) {
          console.log("This car is the winner of the year!");
        }

        if (car3likes === 4) {
            console.log("This car is the winner of the year!");
          }

        if (car4likes === 4) {
            console.log("This car is the winner of the year!");
          }
  
          console.log(`Car 1: ${car1likes}`);
          console.log(`Car 2: ${car2likes}`);
          console.log(`Car 3: ${car3likes}`);
          console.log(`Car 4: ${car4likes}`);
      
      }, [car1likes, car3likes]); //- dependency array - gi pecati vo konzola glasovite samo na 1 i 3
    
      return (
        <div>
          <h1>The best car wins!</h1>
          <h2>Vote!</h2>
        
          <div id="1" >
            <h3>Car 1 - Mercedes</h3>
            <img
              src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/51617/amg-gle-coupe-exterior-left-front-three-quarter.jpeg?q=80https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/51617/amg-gle-coupe-exterior-left-front-three-quarter.jpeg?q=80"
              style={{ width: 250, height: 150 }}
            />
            <br />
            <button onClick={() => {setcar1likes(car1likes + 1);
              }}>Like</button>
              <button onClick={() => {setcar1likes(car1likes - 2);
              }}>Dislike</button> 
              <button onClick={() => {setcar1likes(car1likes +2);
              }}>SuperLike</button>
              <h2>Mercedes votes: {car1likes}</h2>
            <br />
            <br />    
         </div>

       
          <div id="2">
            <h3>Car 2 -BMW </h3>
            <img
              src="https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg="
              style={{ width: 250, height: 150 }}
            />
            <br />
            <button onClick={() => {setcar2likes(car2likes + 1);
             }}>Like</button>
            <button onClick={() => {setcar2likes(car2likes - 2);
            }}>Dislike</button> 
            <button onClick={() => {setcar2likes(car2likes +2);
            }}>SuperLike</button>
             <h2>BMW votes: {car2likes}</h2>
            <br />
            <br />    
         </div>

         <div id="3">
            <h3>Car 3 - Audi </h3>
            <img
              src="https://w7.pngwing.com/pngs/764/363/png-transparent-2018-audi-tt-rs-coupe-car-mercedes-volkswagen-audi-car-performance-car-volkswagen-thumbnail.png"
              style={{ width: 250, height: 150 }}
            />
            <br/>
            <button onClick={() => {setcar3likes(car3likes + 1);
              }}>Like</button>
            <button onClick={() => {setcar3likes(car3likes - 2);
            }}>Dislike</button> 
            <button onClick={() => {setcar3likes(car3likes +2);
            }}>SuperLike</button>
              <h2>Audi votes: {car3likes}</h2>
            <br />
            <br />    
         </div>

         <div id="4">
            <h3>Car 4 - Compass </h3>
            <img
              src="https://www.jeep.mk/wp-content/uploads/2022/03/Jeep-Longitude-21-ICE-296AlpineWhiteP10.jpg"
              style={{ width: 250, height: 150 }}
            />
            <br />
            <button onClick={() => {setcar4likes(car4likes + 1);
              }}>Vote</button>
            <button onClick={() => {setcar4likes(car4likes - 2);
            }}>Dislike</button> 
            <button onClick={() => {setcar4likes(car4likes +2);
            }}>SuperLike</button>
              <h2>Audi votes: {car4likes}</h2>
            <br />
            <br />    
         </div>

         </div>
       
      );
    };