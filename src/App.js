import React, { createContext, useReducer, useState } from "react";
import ComA from "./ComA"
import ComC from "./ComC";
const FirstName= createContext();
const LastName= createContext();
const Fullname= createContext();

const initialState = {
  name: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NAME':
      return { name: action.payload }
    default:
      return state
  }
}

const App = () => {
  // const[name,setName]= useState();
  // const fullNameObj = { 
  //   fname: name,
  //   setFname: setName
  // }

  const [state, dispatch] = useReducer(reducer, initialState)

  const fullNameObj = {
    state: state,
    dispatch: dispatch
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


