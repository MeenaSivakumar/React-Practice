import { useAtomValue } from "jotai";
import { LoginFormAtom } from "./atom/LoginFormAtom";

export const Summary = ({}) =>{
   const loginInfo = useAtomValue(LoginFormAtom);
    return(
    <div>
    <p>user email id:{loginInfo.email}</p>
    <p>user password id:{loginInfo.password}</p>
    </div>

    );
}