import React from "react";

const App = () => {

  //localStorage.clear() , .setItem() , .getItem() , removeItem();
  //localStorage.clear();
  // localStorage.setItem('user','Ayush');
  // const user = localStorage.getItem('user');
  // console.log(user);
  // localStorage.setItem('age','18');
  // const user = {
  //   name : localStorage.getItem('user'),
  //   age : localStorage.getItem('age')
  // };
  // console.log(user);
  
  // const user = {
  //   name : 'Ayush',
  //   age: 21,
  //   city : 'Bhopal'
  // };

  //localStorage.setItem('user',user);//it will only show object object because it can only contain string not object or array

  // localStorage.setItem('user',JSON.stringify(user))//it will be saved as string
  //to access it as a object we will do
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  return (
    <div className="">
      App
    </div>
  );  
}

export default App;