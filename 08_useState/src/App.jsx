import React from "react";
import { useState } from "react";
import './App.css';

function App(){

  const [num,setNum] = useState({user:'Ayush',age:20})
  const [count,setCount] = useState(0);

  const btnClicked = () => {
    //setNum(prev => {prev+1}) if we want to do batch update
    // setNum(prev => ({ ...prev, age: 50 }));
    const newNum  ={...num}; // to copy whole object to newNum with new ref
    newNum.user = 'Aman'
    console.log(num);
    console.log(newNum);
    setNum(newNum);  

    newNum.add({gender:"M"});
    console.log(newNum);
  }
  function Increment(){
    setCount(count+1);
  }
  function Decrement(){
    if(count == 0){
      return alert("Count can't be negative");
    }else{
      setCount(count-1);
    }
  }
  return(
    <div className="container">
      <h1 >Count :- {count}</h1>
      <button className="btn" onClick={Increment}>Increment</button>
      <button className="btn" onClick={Decrement}>Decrement</button>
      <button onClick={btnClicked}>hi</button>

    </div>
  );
}
export default App;