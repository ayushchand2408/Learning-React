import React, { useState } from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

function Navbar(){
    const [theme,setTheme] = useContext(ThemeDataContext)

  return <div className="nav">
    <h1>Ayush</h1>
    <Nav2/>
    
  </div>
}

export default Navbar;