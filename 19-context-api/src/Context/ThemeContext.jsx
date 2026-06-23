import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeDataContext =  createContext();
function ThemeContext(props){

    const [theme,setTheme] = useState('light');
  return <div >
    <ThemeDataContext.Provider value={[theme,setTheme]}>
        {props.children}
    </ThemeDataContext.Provider>
      {// you have wrapped the App.jsx with 
    //ThemeContext in main.jsx so now you are calling children
    //of ThemeContext wgich is App.jsx" 
    }

  </div>
}

export default ThemeContext;