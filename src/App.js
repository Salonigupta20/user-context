import React, { createContext, useState } from "react";
import ComA from "./ComA"
import ComC from "./ComC";
const FirstName= createContext();
const LastName= createContext();
const Fullname= createContext();

const App = () => {
  const[name,setName]= useState();
  const fullNameObj = { 
    fname: name,
    setFname: setName
}

  return(
    <>
    <FirstName.Provider value={'Saloni'}>
    <LastName.Provider value={'Gupta'}>
    <Fullname.Provider value={fullNameObj}>
  <ComA/>
  </Fullname.Provider>
  </LastName.Provider>
  </FirstName.Provider>
  </>
  );
}; 

export default App;
export {FirstName, LastName,Fullname};


