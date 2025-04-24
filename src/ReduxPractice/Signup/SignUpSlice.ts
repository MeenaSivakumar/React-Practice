import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";

export interface signUpState {
  email: string;
  firstName: string;
  phoneNummber: number;
  password: string;
}
const initialState: signUpState = {
  email: "",
  firstName: "",
  phoneNummber: 0,
  password: "",
};
export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNummber = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setFirstName, setPhoneNumber, setPassword } =
  signUpSlice.actions;
export default signUpSlice.reducer;
