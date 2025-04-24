import { useAtom } from "jotai";
import { LoginFormAtom } from "./atom/LoginFormAtom";
import { useNavigate } from "react-router-dom";

export const PasswordField = ({}) =>{
   const navigate = useNavigate();
    const[loginData,setLoginData] = useAtom(LoginFormAtom);
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/summary");
      };
    return(
        <div>
            <form onSubmit={handleSubmit}> 
            <input
            type="password"
            placeholder="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
           <input type="submit" />
            </form>
       
        </div>
    );
}