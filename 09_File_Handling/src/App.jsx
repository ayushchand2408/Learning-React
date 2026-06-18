import React from "react";
import "./App.css"; 
const App = () => {

  const sumbitHandler = (e) =>{
    e.preventDefault();
    console.log("Submitted");
  }

  return(
    <div>
      <form onSubmit={(e)=>{
          sumbitHandler(e)
        }}>
        <input type="text" placeholder="enter your name"></input><br/>
        <button >Submit </button>
      </form>
    </div>
  );
}

export default App;