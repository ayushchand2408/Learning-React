import React from "react";
import { MoveRight } from 'lucide-react';

function RightCardContent(props){
    return(
        <div className="absolute  flex flex-col justify-between p-8 top-0 left-0 h-full w-full ">
            <h2 className="bg-white rounded-full text-xl font-semibold h-12 w-12 flex justify-center items-center">{props.id +1}</h2>
            <div>
                <p className="text-lg leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nobis doloribus accusamus numquam, porro quia.</p>
                <div className="flex  justify-between">
                    <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-3 rounded-full">{props.tag}</button>
                    <button className="bg-blue-600 text-white font-medium px-4 py-3 rounded-full"><MoveRight/></button>
                </div>
            </div>
        </div>
    );
}

export default RightCardContent;