import React, { createContext } from "react";
import ComA from "./ComA"
const FirstName= createContext();

const App = () => {
  return(
    <>
    <FirstName.Provider value={'Saloni Gupta'}>
  <ComA/>
  </FirstName.Provider>
  </>
  );
}; 

export default App;
export {FirstName};
