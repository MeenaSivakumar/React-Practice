import { useState } from "react";

  type User={
      name:string;
      email:string;
      isSubscribed:boolean;
   }
export const UserObj = ({})=>{
  const[userObj,setUserObj] = useState<User>({name:'meena',email:'',isSubscribed:false});
 
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    
       setUserObj({...userObj,isSubscribed:e.target.checked})
    
  }
    return(
        <div>
            <p>click to subscribe</p>
         <input type="checkbox" checked={userObj.isSubscribed} onChange={handleChange}/>
         <div>
            {userObj.isSubscribed && <p>
                {userObj.name} subscribed</p>}
         </div>
        </div>
    )
}