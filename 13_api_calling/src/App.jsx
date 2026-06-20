import React from "react";

const App = () =>{

  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') // wait till the api give respnse 
    console.log(response);
  }
  return (
    <div className="">
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;