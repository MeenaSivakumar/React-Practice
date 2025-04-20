
import './App.css';
import { DefaultProp } from './Practice/DefaultProps/DefaultProp';
import { Count } from './Practice/DisplayCount/Count';
import { UserInfo } from './Practice/DisplayObject';
import { CallBackComponent } from './Practice/FunctionComponent/CallBackComponent';
import { IterateItems } from './Practice/IterateList/IterateItems';
import { Container } from './Practice/RenderChildren/Container';
import { Button } from './Practice/ReusableBuuton/Buuton';

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
     <CallBackComponent fun={func}/>
    </div>
  );
}

export default App;
