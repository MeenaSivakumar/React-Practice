import { useEffect } from "react";

export const CopMount = ({}) =>{

   useEffect(()=>{
    console.log("compount mounted");
   }) 
    return(
        <h1>hii</h1>
    );
}