import { useState } from "react";

export const DisableButton = ({}) =>{

    const[input,setInput] = useState("");
    const[isDisable,setDisable] = useState(false);
    return(
        <>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
       <button disabled={!input.trim}>click</button>
        </>
    );
}