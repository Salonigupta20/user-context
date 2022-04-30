import React, { useContext,useReducer, useState  } from "react";
import { FirstName, LastName, Fullname} from "./App";

const ComC = () => {
    const fname= useContext(FirstName);
    const lname=useContext(LastName);
    const fnameContext=useContext(Fullname);

   
    const InputEvent= (event)=>{
        console.log(event.target.value);
        fnameContext.setFname(event.target.value);
    }
    return(
        <>
        <h1>Hello this is {fname} {lname} {fnameContext.fname}</h1>
        <input 
        type="text"
        placeholder="Enter your name"
        onChange={InputEvent}
        value={fnameContext.fname}
        />
        <button onClick={InputEvent}>click me</button>
    </>
     );
    };

    export default ComC; 
    