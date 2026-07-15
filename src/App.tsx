import { Route, Routes } from "react-router-dom";
import { Counter } from "./Practice/Counter/Counter";
import { DisplayCounter } from "./Practice/Counter/DisplayCounter";
import { FruitsListPage } from "./Pages/FruitList/FruitsListPage";
import { InputForm } from "./Practice/FormHandling/InputForm";
import { DisplayEmployee } from "./Practice/FormHandling/DisplayEmployee";
import { ToDoAPP } from "./Practice/TodoApp/ToDoAPP";



function App() {
 
  return (
  //  <Routes>
  //   <Route path="/" element={<Counter value={0}/>}/>
  //   <Route path="/display" element={<DisplayCounter/>}/>
  //   </Routes>

   
   <div>
    <ToDoAPP/>
   </div>
  );
}

export default App;
