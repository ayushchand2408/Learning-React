import React, { useState } from "react";
import './App.css'

const App = () => {
  const[title , setTitle] = useState("");
  const[details , setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className="flex flex-col lg:w-1/2  flex-cols  p-10 gap-4">
        
          <input onChange={(e)=>{
            setTitle(e.target.value);
          }} type="text" 
          placeholder="Enter Notes Heading" 
          value={title}
          className="px-5 w-full py-2 outline-none border-2 rounded " 
          />
          <textarea onChange={(e)=>{
            setDetails(e.target.value);
          }} placeholder="enter details"
          value={details} 
          className="px-5 w-full font-medium h-32 py-2 flex-row py-2 h-20 outline-none  border-2 rounded "
          />
          <button 
          className="bg-white w-full text-black px-5 py-2 outline-none rounded ">Add Note</button>        
      </form>
      <div className="lg:w-1/2  bg-gray-900  p-10">
        <h1 className="text-3xl font-bold" >Saved Notes</h1>
        <div className="flex h-full flex-wrap gap-5 mt-3 overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          
        </div>
      </div>
    </div>
  );
}

export default App;