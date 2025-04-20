import { ButtonProps } from "./Button.types";

export const Button = ({label,onClick,color}:ButtonProps) =>{
 
    return(
        <button onClick={onClick} style={{backgroundColor:color}}>{label}</button>
    );
}