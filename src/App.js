import './App.css';
import React from 'react';
import { useState } from "react";


const App = () => {
  const [colorHex, setColorHex] = useState("#dddddd");
  const randomColorHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorHex(randomColor);
  }
  return (
    <div className="App" style={{backgroundColor: `${colorHex}`}}>
      
      <div className="container__counter-father">
      <div className="container__counter-child">
        
      <h1>{colorHex}</h1>
      <div className="container__counter-buttons">        
      <button type="button" className="container__counter-button increase" onClick = {randomColorHex}>Random</button>
      <button type="button" className="container__counter-button reset" onClick = {() => navigator.clipboard.writeText(colorHex)}>Copy</button>
      </div>
      </div>
    </div>

    </div>
  );
}

export default App;
