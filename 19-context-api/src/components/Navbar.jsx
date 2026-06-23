import React, { useState } from "react";
import Nav2 from "./Nav2";

function Navbar(props){
  return <div className="nav">
    <h1>NavBar</h1>
    <Nav2 theme = {props.theme} />
    
  </div>
}

export default Navbar;