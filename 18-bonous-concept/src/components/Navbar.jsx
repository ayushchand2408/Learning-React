import React from "react";

function Navbar(props){
    
    function changeTheme(){
        console.log("theme Change",props.theme);
        props.setTheme('black')
    }

  return <div className="">
    <button onClick={changeTheme}>Change Theme</button>
  </div>
}

export default Navbar;