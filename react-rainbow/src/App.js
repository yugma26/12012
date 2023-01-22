import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([
    "lavender", 
    "violet",
    "indigo",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
    "brown",
    "black",
  ]);

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color}/>
    )
  });
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  return(
    <div className="App">
      {colorMap}
      <ColorForm addColor={ addColor }/>
    </div>
  )
}

export default App;