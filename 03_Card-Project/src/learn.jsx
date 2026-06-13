import React from "react";

function learn(){
arr = [10,20,30,40]; {/* we can use this to  call array so that we can store object in arr and use them to call componenets and change therie value using props*/}
arr1 = [{user:'Ayush'},{uset:'Aman'},{user:'Raman'}]
return(
    <div className="parent">
        {arr.map(function(elem){
            // return elem;
            //return <h1>{elem}</h1>
        })};
    </div>
);
}

export default learn;