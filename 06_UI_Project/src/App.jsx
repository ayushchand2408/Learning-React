import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

function App(){
  const users= [
    {
      img:'https://plus.unsplash.com/premium_photo-1683133457579-baf5689d4d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'green',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661598162494-a001ca960f0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683133457579-baf5689d4d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'red',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683133457579-baf5689d4d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'purple',
      tag:'Satisfied'
    }
  ]
  return(
    <div>
      <Section1 user={users}/>
      <Section2 />
    </div>
  );
}

export default App;