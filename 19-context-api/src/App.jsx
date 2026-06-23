import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import Button from "./components/Button";

function App(){

  const [theme , setTheme] = useState('light');
  return <div className="container">
    <Navbar >
      <h1>Children 1</h1>
      <h1>Children 2</h1>//passing children as props

    </Navbar>
    <Button/>
  
  </div>
}

export default App;