import { childInputProps } from "./ChildInput.types";

export const ChildInput = ({ref}:childInputProps)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    );
}