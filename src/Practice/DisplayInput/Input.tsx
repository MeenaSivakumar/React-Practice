import { useState } from "react";

export const Input = ({})=>{
  
    const[input,setInput] = useState("React Native");
    return(
        <>
         <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
         <h1>{input}</h1>
        </>
       
    );
}