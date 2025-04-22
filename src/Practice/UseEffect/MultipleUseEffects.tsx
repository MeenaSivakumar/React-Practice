import { useEffect, useState } from "react";

export const MultipleUseEffect = ({}) =>{
   
    const [count, setCount] = useState(50);
    const handleSubmit = () => {
        setCount(count + 1);
      };
      useEffect(()=>{
        console.log("component mounted");
      },[]);
      useEffect(()=>{
       return console.log("count changed",count);
      },[count])
    return(
        <>
        <h1>Click to increment the count</h1>
        <button onClick={handleSubmit}>submit</button>
        <p>{count}</p>
        </>
        
    );
}