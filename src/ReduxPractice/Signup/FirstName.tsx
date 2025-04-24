import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { setFirstName } from "./SignUpSlice";

export const FirstName = ({}) => {
  const navigate = useNavigate();
  const firstName = useSelector((state: RootState) => state.signUp.firstName);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/phoneNumber");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="firstName"
          onChange={(e) => dispatch(setFirstName(e.target.value))}
        />
        <input type="submit" />
      </form>
      <span>{firstName}</span>
    </div>
  );
};
