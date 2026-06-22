import React from "react";
import { Link } from "react-router-dom";

function Product(){
    return <div className="">
        <div className="flex justify-center gap-10 py-4">
            <Link className="text-xl font-semigold" to='/product/men'>Men</Link>
            <Link className="text-xl font-semigold" to='/product/women'>Women</Link>

        </div>
    </div>
}

export default Product;