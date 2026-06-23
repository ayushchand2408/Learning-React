import React, { useState } from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

function Button(){
   const [theme,setTheme] = useContext(ThemeDataContext)
    const changeTheme = () => {
        let cpyTheme= (theme=='light' ? 'dark' : 'light')
        setTheme(cpyTheme)
    }

  return <div className="Button">
   <button onClick={changeTheme}>Change Theme</button>
  </div>
}

export default Button;