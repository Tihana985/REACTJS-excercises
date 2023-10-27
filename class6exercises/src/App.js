import logo from './logo.svg';
import './App.css';
import {User} from './components/User';
import {Cars} from './components/Cars';
import { useState } from 'react';

function App() {


    // const [carsForSale, setCarsForSale] = useState([
    //   { id: 1, car: "BMW", sold: false, quantity: 5},
    //   { id: 2, car: "AUDI", sold: false, quantity: 5},
    //   { id: 3, car: "URUS", sold: false, quantity: 5},
    // ]);
  
  

    
  return (
    <div className="App">
      <h1>Class 6  - exercise 1</h1>
      <User />
      <h1>Exercise </h1>
      <Cars />
    </div>
  );
}

export default App;
