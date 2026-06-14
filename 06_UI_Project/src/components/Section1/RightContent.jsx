import React from "react";
import RightCard from "./RightCard";


function RightContent(props){
    console.log(props);
    return (
        <div id='right'className="h-full  rounded-4xl p-4 w-3/4 overflow-x-auto flex flex-nowrap gap-10">
            {props.user.map(function(elem,idx){
                return <RightCard key={idx}   id={idx} color={elem.color} img = {elem.img} tag={elem.tag}/>
            })}
            
        </div>
    );
}

export default RightContent;