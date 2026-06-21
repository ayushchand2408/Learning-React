import React from "react";

const Card = (props) => {

    return (
        <div>
            <a href={props.elem.url} target="blank">
                    <div className="h-40 w-39 bg-white rounded-xl" >
                        <img className="h-full object-cover "src={props.elem.download_url} alt="..."/>
                    </div>
                    <h2 className="font-bold text-l">{props.elem.author}</h2>
                </a>
        </div>
    );
}

export default Card;