import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { setEmail, signUpSlice } from "./SignUpSlice";

export const EmailField = ({}) => {
  const navigate = useNavigate();
  const email = useSelector((state: RootState) => state.signUp.email);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/firstName");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
      </form>
      <h1>{email}</h1>
    </div>
  );
};
