import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { UpdateObjectUseEffect } from "./Practice/UseEffect/UpdateObjectUseEffect";
import { EmailField } from "./ReduxPractice/Signup/EmailField";
import { Summary } from "./ReduxPractice/Signup/Summary";
import { PhoneNumber } from "./ReduxPractice/Signup/PhoneNumber";
import { PasswordField } from "./ReduxPractice/Signup/PasswordField";
import { FirstName } from "./ReduxPractice/Signup/FirstName";

function App() {
  const func = () => {
    console.log("button clicked");
  };
  return (
    <Routes>
      <Route path="/email" element={<EmailField />} />
      <Route path="/firstName" element={<FirstName />} />
      <Route path="/password" element={<PasswordField />} />
      <Route path="/phoneNumber" element={<PhoneNumber />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
