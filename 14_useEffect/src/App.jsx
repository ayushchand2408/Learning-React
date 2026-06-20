import React from "react";
import { useState } from "react";
import { useEffect } from "react";



const App = () => {
  const [a,setA] = useState(10);
  const [b,setB] = useState(10);


   useEffect(function(){
    console.log("A is Changing")
   },[a])

   useEffect(function(){
    console.log("B is Changing")
   },[b])

   const changeA = () =>{
    setA(a+10)
   }

   const changeB = () =>{
    setB(b+10)
   }
   
  return (
    <div className="">
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={changeA}>Change</button>
      <button onClick={changeB}>Change</button>

    </div>
  );
}

export default App;