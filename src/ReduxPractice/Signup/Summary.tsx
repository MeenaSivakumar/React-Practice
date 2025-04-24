import { useSelector } from "react-redux";

import { RootState } from "../store";

export const Summary = ({}) => {
  const summary = useSelector((state: RootState) => state.signUp);

  return (
    <div>
      <h1>user email:{summary.email}</h1>
      <h2>first name:{summary.firstName}</h2>
      <h3>phone number:{summary.phoneNummber}</h3>
      <h4>password:{summary.password}</h4>
    </div>
  );
};
