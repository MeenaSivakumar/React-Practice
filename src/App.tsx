import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { UpdateObjectUseEffect } from "./Practice/UseEffect/UpdateObjectUseEffect";

function App() {
  const func = () => {
    console.log("button clicked");
  };
  return (
   
    
 
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
     <UpdateObjectUseEffect/>
     {/* <LoginForm/> */}
    </div>
  );
}

export default App;
