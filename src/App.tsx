
import './App.css';
import { ArrayState } from './Practice/ArrayInState/ArrayState';
import { ConditionalRendoring } from './Practice/CondtionalRendering/ConditionalRendering';
import { DefaultProp } from './Practice/DefaultProps/DefaultProp';
import { DisableButton } from './Practice/DisableButton/DisableButton';
import { Count } from './Practice/DisplayCount/Count';
import { Input } from './Practice/DisplayInput';
import { UserInfo } from './Practice/DisplayObject';
import { CallBackComponent } from './Practice/FunctionComponent/CallBackComponent';
import { IterateItems } from './Practice/IterateList/IterateItems';
import { MultipleState } from './Practice/MultipleState/MultipleState';
import { Container } from './Practice/RenderChildren/Container';
import { ResetButton } from './Practice/ResetButton/ResetButton';
import { Button } from './Practice/ReusableBuuton/Buuton';
import { ToggleButton } from './Practice/ToggleButton';
import { UpdateUserObject } from './Practice/UpdateObject/UpdateUserObject';
import { ApiFetch } from './Practice/UseEffect/ApiFetch';
import { CleanUp } from './Practice/UseEffect/CleanUp';
import { CopMount } from './Practice/UseEffect/ComMount';
import { CountUpdate } from './Practice/UseEffect/CountUpdate';
import { EffectOnSpecific } from './Practice/UseEffect/EffectOnSpecificConditon';
import { EffectWithInput } from './Practice/UseEffect/EffectWithInput';
import { MultipleUseEffect } from './Practice/UseEffect/MultipleUseEffects';
import { UpdateTitle } from './Practice/UseEffect/UpdateTitle';

function App() {
  const func = ()=>{
    console.log("button clicked");
  }
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
     <EffectOnSpecific/>
    </div>
  );
}

export default App;
