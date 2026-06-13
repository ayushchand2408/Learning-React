import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";

//Two ways to use component;
function App(){
  
  return <div className="div">
    <Navbar/>
    <h1>hello</h1>
    {Footer()}
  </div>
}
export default App;