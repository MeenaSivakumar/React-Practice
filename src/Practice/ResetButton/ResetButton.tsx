import { useState } from "react";

export const ResetButton =({initialValue = 70})=>{

    
        const[count,setCount] = useState(initialValue);
        const handleSubmit = ()=>{
           setCount(count+1);
        }
        const handleReset =()=>{
            setCount(initialValue);
        }

    return(
        <>
          <button onClick={handleSubmit} >submit</button>
          <p>{count}</p>
          <button onClick={handleReset} >reset</button>
        </>
    );
}