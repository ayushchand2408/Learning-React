import React, { useState } from "react";
import "./App.css"; 
const App = () => {

  const [title, setTitle] = useState('');

  const sumbitHandler = (e) =>{
    e.preventDefault();
    console.log("Form Submitted by " , title);
    setTitle('');
  }

  return(
    <div>
      <form onSubmit={(e)=>{
          sumbitHandler(e)
        }}>
        <input type="text" placeholder="enter your name"  value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}></input><br/>
        <button >Submit </button>
      </form>
    </div>
  );
}

export default App;