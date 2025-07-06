import { useState } from "react"
import { FormProps } from "react-router-dom";

const Form = ({})=>{

    const[name,setName] = useState('');
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState('');
    const[userData,setUserData] = useState<FormProps>();
   
    const handleSubmit = ()=>{
        
         setUserData(
            {}
         )
    }
  
    return(
        <>
        <form>
              <input type='text' placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type='email' placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type='number' placeholder="Enter your Age" value={age} onChange={(e)=>{setAge(e.target.valueAsNumber)}} />
            <button onClick={()=>handleSubmit}>Submit</button>
        </form>
        </>
    )
}