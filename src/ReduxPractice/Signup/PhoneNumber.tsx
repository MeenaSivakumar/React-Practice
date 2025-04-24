import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { setPhoneNumber } from "./SignUpSlice";

export const PhoneNumber = ({}) => {
  const navigate = useNavigate();
  const phoneNumber = useSelector(
    (state: RootState) => state.signUp.phoneNummber
  );
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/password");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="phoneNumber"
          onChange={(e) => dispatch(setPhoneNumber(e.target.valueAsNumber))}
        />
        <input type="submit" />
      </form>
      <span>{phoneNumber}</span>
    </div>
  );
};
