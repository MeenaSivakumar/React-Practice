import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Practice/Counter/Counter";
import { DisplayCounter } from "./Practice/Counter/DisplayCounter";
import { FruitsListPage } from "./Pages/FruitList/FruitsListPage";
import { InputForm } from "./Practice/FormHandling/InputForm";
import { DisplayEmployee } from "./Practice/FormHandling/DisplayEmployee";
import Form from "./Practice/FormUpdate/Form";
import { DynamicList } from "./stateUpdate/dynamic_list_update/DynamicList";
import { UserObj } from "./stateUpdate/stateObj/UserObj";
import { NestedObject } from "./stateUpdate/nestedobject/NestedObject";



function App() {
 
  return (
    <>
  <DynamicList/>
  <UserObj/>
  <NestedObject/>
  </>
  );
}

export default App;
