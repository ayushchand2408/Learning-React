import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return <div className="flex py-4 px-8 bg-cyan-600 items-center justify-between ">
        <h2 className="text-xl font-bold">Ramayan</h2>
        <div className="flex gap-8">
            <Link className="text-l font-bold" to= '/'> Home</Link>
            <Link className="text-l font-bold" to= '/about'> About</Link>
            <Link className="text-l font-bold" to= '/courses'> Courses</Link>
            <Link className="text-l font-bold" to= '/product'> Product</Link>

        </div>
    </div>
}

export default Navbar;