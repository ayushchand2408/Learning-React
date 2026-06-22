import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar2(){

    const navigate = useNavigate()

    return <div className="py-2 gap-8 px-5 bg-cyan-400">
        <button onClick={()=>{
            navigate('/');
        }} 
        className="bg-emerald-500 px-5 mx-3 cursor-pointer active:scale-85 py-2 rounded" >
            Return to Home
        </button>
        <button onClick={() => {
            navigate(-1);
        }} className="bg-emerald-500 px-5 cursor-pointer active:scale-85 py-2 rounded" >
            Back
        </button>
    </div>
}

export default Navbar2;