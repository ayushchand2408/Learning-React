import React from "react";

function Card(props){
    return (
    <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>Lavista Vista mama mia</p>
        <button>view profile</button>
    </div>);
}
export default Card;