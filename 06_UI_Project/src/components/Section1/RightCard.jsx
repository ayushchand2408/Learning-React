import React from "react";
import RightCardContent from "./RightCardContent";


function RightCard(props){
    return(
        <div className="h-full w-70  shrink-0 overflow-hidden relative  rounded-4xl ">
            <img className="h-full w-full object-cover" src={props.img}></img>
             <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
        </div>
    );
}

export default RightCard;