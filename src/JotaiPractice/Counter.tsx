import { useAtomValue, useSetAtom } from "jotai";
import { CounterAtom } from "./atom/CounterAtom";
import { useNavigate } from "react-router-dom";

export const Counter = ({})=>{
  const updateCount = useSetAtom(CounterAtom); 
 const navigate = useNavigate();
  const handleSubmit = ()=>{
    updateCount(c=>c+1);
   navigate('/displayCount');
  }
    return(
        <div>
            <p>click to increment the count</p>
            <button type="submit" onClick={handleSubmit}>increment</button>
            
        </div>
    );
}