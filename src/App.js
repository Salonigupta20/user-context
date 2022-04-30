import React, { createContext } from "react";
import ComA from "./ComA"
import ComC from "./ComC";
const FirstName= createContext();
const LastName= createContext();

const App = () => {
  return(
    <>
    <FirstName.Provider value={'Saloni'}>
    <LastName.Provider value={'Gupta'}>
  <ComA/>
  </LastName.Provider>
  </FirstName.Provider>
  </>
  );
}; 

export default App;
export {FirstName, LastName};
