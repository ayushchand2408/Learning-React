import React from "react";
import axios from 'axios';

const App = () =>{

  // async function getData(){
  //   // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') // wait till the api give respnse 
  //   // const data = await response.json()

  //   // console.log(data)

  // }

  // const getData = async () => {
  //   // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');//destructering
  //   // console.log(response.data)
  //   console.log(data);
  // }
  
  const getData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');//destructering
    // console.log(response.data)
    console.log(data);
  }
  return (
    <div className="">
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;