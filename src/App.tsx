import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Practice/Counter/Counter";
import { DisplayCounter } from "./Practice/Counter/DisplayCounter";
import { FruitsListPage } from "./Pages/FruitList/FruitsListPage";
import { InputForm } from "./Practice/FormHandling/InputForm";
import { DisplayEmployee } from "./Practice/FormHandling/DisplayEmployee";
import UserList from "./components/UserList";
import { fetchUsers } from "./api/users";
import UsersInfo from "./components/UsersInfo";



function App() {
 
  return (
   <div style={{ padding: "1rem" }}>
        <h2>User List (React Query)</h2>
       
          <UsersInfo/>
        <UserList />
    </div>
  );
}

export default App;
