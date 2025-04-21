import { useState } from "react";

export const MultipleState = ({}) =>{

    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    return(<>
    <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.valueAsNumber)}/>
    </>
    );
}