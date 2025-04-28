import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Practice/Counter/Counter";
import { DisplayCounter } from "./Practice/Counter/DisplayCounter";
import { FruitsListPage } from "./Pages/FruitList/FruitsListPage";
import { InputForm } from "./Practice/FormHandling/InputForm";
import { DisplayEmployee } from "./Practice/FormHandling/DisplayEmployee";



function App() {
 
  return (
  //  <Routes>
  //   <Route path="/" element={<Counter value={0}/>}/>
  //   <Route path="/display" element={<DisplayCounter/>}/>
  //   </Routes>

    <div >
     {/* <DisplayString message="hello react......"/> */}
     {/* <Count/> */}
     {/* <IterateItems/> */}
     {/* <DefaultProp isLoggedIn = {false} /> */}
     {/* <Button color='red' label='click' onClick={()=>console.log("you are a good person")}/> */}
     {/* <UserInfo userInfo={{name:'meena',age:21,email:'demo@gmail.com'}} /> */}
     {/* <Container value='hello'/> */}
     {/* <CallBackComponent fun={func}/> */}
     {/* <Input/> */}
     {/* <ToggleButton/> */}
     {/* <MultipleState/> */}
     {/* <ResetButton/> */}
     {/* <ArrayState></ArrayState> */}
     {/* <UpdateUserObject/> */}
     {/* <ConditionalRendoring shown={false}/> */}
     {/* <DisableButton/> */}
     {/* <CopMount/> */}
     {/* <CountUpdate/> */}
     {/* <CleanUp/> */}
     {/* <EffectWithInput/> */}
     {/* <UpdateTitle/> */}
     {/* <MultipleUseEffect/> */}
     {/* <ApiFetch/> */}
     {/* <EffectOnSpecific/> */}
     {/* <UpdateObjectUseEffect/> */}
     {/* <LoginForm/> */}
     {/* <FruitsListPage/> */}
     <InputForm/>
     {/* <DisplayEmployeeList/> */}
     {/* <DisplayEmployee/> */}
    </div>
  );
}

export default App;
