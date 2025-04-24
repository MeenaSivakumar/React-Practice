import { useAtomValue } from "jotai";
import { CounterAtom } from "./atom/CounterAtom";

export const DisplayCount = ({})=>{
    const count = useAtomValue(CounterAtom);
    return(
    <div>
        <p>{count}</p>
    </div>
    );
}