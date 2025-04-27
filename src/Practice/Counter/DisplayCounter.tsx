import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

export const DisplayCounter = ({})=>{
   
     const location = useLocation();
     const value = location.state || 0;
     const[count,setCount] = useState(value);
     useEffect(()=>{
         return console.log("count updated");
     },[count])
    
     const  handleIncrement = ()=>{
        setCount(count+1);
     } 
     const handleDecrement = ()=>{
       setCount(count-1);
     }
    return(
        <div>
            <button type="submit" onClick={handleIncrement}>Increment</button>
            <button type="submit" onClick={handleDecrement}>Decrement</button>
            <span>{count}</span>
        </div>
    );
}