import React, { useState } from "react";
import { X } from 'lucide-react';
import './App.css'

const App = () => {
  const[title , setTitle] = useState("");
  const[details , setDetails] = useState("");
  const[task , setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});

    setTask(copyTask);
    console.log(task);


    setDetails('');
    setTitle('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1);

    setTask(copyTask);

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
          className="bg-white active:scale-95 w-full text-black px-5 py-2 outline-none rounded ">
            Add Note
          </button>        
      </form>
      <div className="lg:w-1/2  bg-gray-900  p-10">
        <h1 className="text-3xl font-bold" >Saved Notes</h1>
        <div className="flex h-[90%] flex-wrap gap-5 mt-3 overflow-auto">
          {task.map(function(elem , idx){
            return <div key={idx} className="relative h-52 w-40 rounded-2xl bg-cover text-black overflow-hidden bg-white p-4 bg-[url('https://cdn5.vectorstock.com/i/1000x1000/20/29/yellow-sticky-note-template-taped-office-memo-vector-46412029.jpg')]">
              <h2 onClick={(e)=>{
                deleteNote(idx);
              }}className="absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs"><X /></h2>
              <h3 className="mt-2 leading-tight font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium">{elem.details}</p>
             </div> 
          })}
          
        </div>
      </div>
    </div>
  );
}

export default App;