import { useState } from "react";
import { DisplayCount } from "./DisplayCount";

export const Count = ({}) =>{

    const[count,setCount] = useState(0);
    const handleSubmit = ()=>{
       setCount(count+1);
    }
    return(
        <>
         <h1>Click to increment the count</h1>
         <button onClick={handleSubmit} >submit</button>
         <DisplayCount value ={count}/>
        </>
    );
}