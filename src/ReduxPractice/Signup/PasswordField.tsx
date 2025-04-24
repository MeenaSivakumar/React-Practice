import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { setPassword, signUpSlice } from "./SignUpSlice";

export const PasswordField = ({}) => {
  const navigate = useNavigate();
  const password = useSelector((state: RootState) => state.signUp.password);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpSlice.getSelectors());
    navigate("/summary");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <input type="submit" />
      </form>
      <span>{password}</span>
    </div>
  );
};
