import { useAtom } from "jotai";
import { LoginFormAtom } from "./atom/LoginFormAtom";
import { useNavigate } from "react-router-dom";

export const EmailField = ({}) => {
  const [loginData, setLoginData] = useAtom(LoginFormAtom);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/password");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
};
