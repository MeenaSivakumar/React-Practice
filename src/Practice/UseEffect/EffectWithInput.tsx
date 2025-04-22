import { useEffect, useState } from "react";

export const EffectWithInput = ({}) =>{
    const[input,setInput] = useState("");
    useEffect(()=>{
     console.log(input);
    },[input])
    return(
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
    );
}